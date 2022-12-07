import { Col, Row, Skeleton, Spin } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useFetch } from '../../hooks/useFetch';
import { ChartCard } from '../ChartCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const labels = ['Watch', 'Stars', 'Issues', 'Forks'];

// const reactInfos = [6649, 198640, 1109, 41242];
// const angularInfos = [3045, 85273, 1323, 22632];
// const vueInfos = [6075, 201064, 592, 33115];
// const svelteInfos = [877, 63581, 835, 3107];
// const jqueryInfos = [3246, 57001, 94, 20658];

const attributeTitles = ['Forks', 'Issues', 'Stars', 'Watchers'];
const attributeKeys = ['forks_count', 'open_issues_count', 'stargazers_count', 'watchers_count'];

export function ChartBar() {
  const { data: dataReact, loading: loadingReact } = useFetch<Record<string, unknown>>('/facebook/react');
  const { data: dataJquery, loading: loadingJquery } = useFetch<Record<string, unknown>>('/jquery/jquery');
  const { data: dataAngular, loading: loadingAngular } = useFetch<Record<string, unknown>>('/angular/angular');
  const { data: dataSvelte, loading: loadingSvelte } = useFetch<Record<string, unknown>>('/sveltejs/svelte');
  const { data: dataVue, loading: loadingVue } = useFetch<Record<string, unknown>>('/vuejs/vue');

  const loading = loadingReact || loadingJquery || loadingAngular || loadingSvelte || loadingVue;

  const { md } = useBreakpoint();

  return (
    <Spin spinning={loading}>
      {loading ? (
        <Skeleton />
      ) : (
        <Row gutter={[24, 24]} style={{ width: '100%', margin: '16px 0' }}>
          {attributeTitles.map((title, index) => (
            <Col key={title} lg={12} xs={24}>
              <ChartCard
                content={
                  <Bar
                    data={{
                      labels: [title],
                      datasets: [
                        { label: 'React', data: [dataReact![attributeKeys[index]]], backgroundColor: '#61dafb' },
                        { label: 'Angular', data: [dataAngular![attributeKeys[index]]], backgroundColor: '#bb002e' },
                        { label: 'Vue', data: [dataVue![attributeKeys[index]]], backgroundColor: '#3eaf7c' },
                        { label: 'Svelte', data: [dataSvelte![attributeKeys[index]]], backgroundColor: '#f23b00' },
                        { label: 'Jquery', data: [dataJquery![attributeKeys[index]]], backgroundColor: '#1064a5' },
                      ],
                    }}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: { position: 'top' as const },
                        title: { display: false },
                      },
                    }}
                    redraw={md}
                  />
                }
                title={title}
              />
            </Col>
          ))}
        </Row>
      )}
    </Spin>
  );
}
