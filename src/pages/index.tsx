import { Layout } from 'antd';
import { GetStaticPropsResult } from 'next';

import { ChartBar, ChartBarProps } from '../components/ChartBar';
import { Header } from '../components/Header';
import { api } from '../core/api';

const timeToRevalidate = 60 * 15; // In seconds - 15m

export default function Home(props: ChartBarProps) {
  return (
    <Layout style={{ height: '100%' }}>
      <Header onSearchSuccess={() => {}} />

      {/* <ul>
        <li>name: {repository?.name}</li>
        <li>full_name: {repository?.full_name}</li>
        <li>description: {repository?.description}</li>
        <li>stargazers_count: {repository?.stargazers_count}</li>
        <li>watchers_count: {repository?.watchers_count}</li>
        <li>language: {repository?.language}</li>
        <li>open_issues_count: {repository?.open_issues_count}</li>
      </ul> */}

      <ChartBar {...props} />

      {/* <ChartLine /> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data: dataReact } = await api.get('/facebook/react');
  const { data: dataJquery } = await api.get('/jquery/jquery');
  const { data: dataAngular } = await api.get('/angular/angular');
  const { data: dataSvelte } = await api.get('/sveltejs/svelte');
  const { data: dataVue } = await api.get('/vuejs/vue');

  return {
    props: { dataReact, dataJquery, dataAngular, dataSvelte, dataVue },
    revalidate: timeToRevalidate,
  } as GetStaticPropsResult<ChartBarProps>;
}
