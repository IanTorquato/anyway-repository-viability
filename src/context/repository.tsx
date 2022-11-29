import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

type RepositoryContextType = {
  owner: string
  repoName: string

  changeOwner: (value: string) => void
  changeRepoName: (value: string) => void
}

const RepositoryContext = createContext<RepositoryContextType>({} as RepositoryContextType)

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const [owner, setOwner] = useState('iantorquato');
  const [repoName, setRepoName] = useState('anyway-repository-viability');

  function changeOwner(value: string) { setOwner(value.trim()) }
  function changeRepoName(value: string) { setRepoName(value.trim()) }

  const contextData = useMemo<RepositoryContextType>(() => ({ owner, repoName, changeOwner, changeRepoName }), [owner, repoName])

  return (
    <RepositoryContext.Provider value={contextData}>
      {children}
    </RepositoryContext.Provider>
  )
}

export const useRepository = () => {
  return useContext(RepositoryContext)
}
