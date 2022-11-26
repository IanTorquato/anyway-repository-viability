import { Input, Layout, Typography } from 'antd'

import styles from './header.module.css'

type HeaderProps = {}

export function Header({}: HeaderProps) {
  return (
    <Layout.Header className={styles.header}>
      <Typography.Title level={1}>Repository Viability</Typography.Title>

      <Input.Search size='large' placeholder='Buscar repositório' />
    </Layout.Header>
  )
}
