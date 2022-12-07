import { Layout } from 'antd';
import { AxiosResponse } from 'axios';
import { GetStaticPropsResult } from 'next';

import { ChartBar, ChartBarProps } from '../components/ChartBar';
import { ChartLine, ChartLineProps } from '../components/ChartLine';
import { Header } from '../components/Header';
import { api } from '../core/api';

const timeToRevalidate = 60 * 15; // In seconds - 15m

type HomeProps = {
  barProps: ChartBarProps;
  lineProps: ChartLineProps;
};

export default function Home({ barProps, lineProps }: HomeProps) {
  return (
    <Layout style={{ height: '100%' }}>
      <Header />

      <ChartBar {...barProps} />
      <ChartLine {...lineProps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const repositoryPaths = [
    '/facebook/react',
    '/jquery/jquery',
    '/angular/angular',
    '/sveltejs/svelte',
    '/vuejs/vue',
    'facebook/react/stats/commit_activity',
    'jquery/jquery/stats/commit_activity',
    'angular/angular/stats/commit_activity',
    'sveltejs/svelte/stats/commit_activity',
    'vuejs/vue/stats/commit_activity',
  ];

  const responses = await Promise.all<AxiosResponse>(repositoryPaths.map(path => api.get(path)));

  const dataReact = responses[0].data;
  const dataJquery = responses[1].data;
  const dataAngular = responses[2].data;
  const dataSvelte = responses[3].data;
  const dataVue = responses[4].data;

  const commitsByWeekReact = responses[5].data;
  const commitsByWeekJquery = responses[6].data;
  const commitsByWeekAngular = responses[7].data;
  const commitsByWeekSvelte = responses[8].data;
  const commitsByWeekVue = responses[9].data;

  return {
    props: {
      barProps: { dataReact, dataJquery, dataAngular, dataSvelte, dataVue },
      lineProps: { commitsByWeekReact, commitsByWeekJquery, commitsByWeekAngular, commitsByWeekSvelte, commitsByWeekVue },
    },
    revalidate: timeToRevalidate,
  } as GetStaticPropsResult<HomeProps>;
}
