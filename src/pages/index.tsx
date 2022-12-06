import { Layout } from 'antd';
import { useState } from 'react';

import { ChartBar } from '../components/ChartBar';
import { ChartLine } from '../components/ChartLine';
import { Header } from '../components/Header';
import { commitsByWeekSerialized } from '../mocks/commitsByWeek';
import { RepositoryType } from '../types/repository';

export default function Home() {
  const [repository, setRepository] = useState<RepositoryType>();

  function handleSearchRepository(repo: RepositoryType) {
    setRepository(repo);
  }

  console.log(commitsByWeekSerialized);

  return (
    <Layout style={{ height: '100%' }}>
      <Header onSearchSuccess={handleSearchRepository} />

      {/* <ul>
        <li>name: {repository?.name}</li>
        <li>full_name: {repository?.full_name}</li>
        <li>description: {repository?.description}</li>
        <li>stargazers_count: {repository?.stargazers_count}</li>
        <li>watchers_count: {repository?.watchers_count}</li>
        <li>language: {repository?.language}</li>
        <li>open_issues_count: {repository?.open_issues_count}</li>
      </ul> */}

      <ChartBar />
      <ChartLine />
    </Layout>
  );
}
