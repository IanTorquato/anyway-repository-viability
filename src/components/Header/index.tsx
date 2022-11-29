import { Input, Layout, Typography } from 'antd'
import { useState } from 'react'

import { githubApi } from '../../core/api.github'
import { RepositoryType } from '../../types/repository'

import styles from './header.module.css'

type HeaderProps = {
  onSearchSuccess: (repository: RepositoryType) => void
}

export function Header({ onSearchSuccess }: HeaderProps) {
  const [loading, setLoading] = useState(false)

  async function handleSearch(params: string) {
    setLoading(true)

    try {
      const [owner, repo] = params.split('/')
      
      const { data: repository } = await githubApi.repos.get({ owner, repo })
      
      onSearchSuccess(repository)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout.Header className={styles.header}>
      <Typography.Title level={1}>Repository Viability</Typography.Title>

      <Input.Search size='large' placeholder='Search: owner/repo'  onSearch={handleSearch} loading={loading} allowClear enterButton autoFocus />
    </Layout.Header>
  )
}
