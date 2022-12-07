import { Skeleton, Spin } from 'antd';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { useFetch } from '../../hooks/useFetch';
import { ChartCard } from '../ChartCard';

import { CommitByWeekType } from './types';
import { serializedWeeks } from './utils/serializedWeeks';

export function ChartLine() {
  const { data: commitsByWeekReact, loading: loadingReact } = useFetch<CommitByWeekType[]>('facebook/react/stats/commit_activity');
  const { data: commitsByWeekJquery, loading: loadingJquery } = useFetch<CommitByWeekType[]>('jquery/jquery/stats/commit_activity');
  const { data: commitsByWeekAngular, loading: loadingAngular } = useFetch<CommitByWeekType[]>('angular/angular/stats/commit_activity');
  const { data: commitsByWeekSvelte, loading: loadingSvelte } = useFetch<CommitByWeekType[]>('sveltejs/svelte/stats/commit_activity');
  const { data: commitsByWeekVue, loading: loadingVue } = useFetch<CommitByWeekType[]>('vuejs/vue/stats/commit_activity');

  const commitsByWeek = commitsByWeekReact && serializedWeeks(commitsByWeekReact?.map(({ week }) => week));

  const loading = loadingReact || loadingJquery || loadingAngular || loadingSvelte || loadingVue;

  return (
    <ChartCard
      content={
        <Spin spinning={loading}>
          {loading ? (
            <Skeleton />
          ) : (
            <Line
              data={{
                labels: commitsByWeek,
                datasets: [
                  {
                    label: 'React',
                    data: commitsByWeekReact?.map(({ total }) => total),
                    borderColor: '#61dafb',
                    backgroundColor: '#61dafb',
                  },
                  {
                    label: 'Angular',
                    data: commitsByWeekAngular?.map(({ total }) => total),
                    borderColor: '#bb002e',
                    backgroundColor: '#bb002e',
                  },
                  {
                    label: 'Vue',
                    data: commitsByWeekVue?.map(({ total }) => total),
                    borderColor: '#3eaf7c',
                    backgroundColor: '#3eaf7c',
                  },
                  {
                    label: 'Jquery',
                    data: commitsByWeekJquery?.map(({ total }) => total),
                    borderColor: '#1064a5',
                    backgroundColor: '#1064a5',
                  },
                  {
                    label: 'Svelte',
                    data: commitsByWeekSvelte?.map(({ total }) => total),
                    borderColor: '#f23b00',
                    backgroundColor: '#f23b00',
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const,
                  },
                  title: {
                    display: true,
                  },
                },
              }}
            />
          )}
        </Spin>
      }
      title="Quantidade de commits no ultimo ano"
    />
  );
}
