import { Input, Layout, Typography } from 'antd'
import { githubApi } from '../../core/api.github'

import styles from './header.module.css'

type HeaderProps = {}

export function Header({}: HeaderProps) {
  async function handleSearch(params: string) {
    const [owner, repo] = params.split('/')

    const data = await githubApi.repos.get({ owner, repo })

    console.log(data)
  }

  return (
    <Layout.Header className={styles.header}>
      <Typography.Title level={1}>Repository Viability</Typography.Title>

      <Input.Search size='large' placeholder='Buscar repositório: owner/repo' onSearch={handleSearch} enterButton />
    </Layout.Header>
  )
}
