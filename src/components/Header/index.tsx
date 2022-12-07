import { Layout, Typography } from 'antd';

import styles from './header.module.css';

export function Header() {
  return (
    <Layout.Header className={styles.header}>
      <Typography.Title level={1}>React Analytics Dashboard</Typography.Title>
    </Layout.Header>
  );
}
