import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  commitsByWeekAngular,
  commitsByWeekJquery,
  commitsByWeekReact,
  commitsByWeekSvelte,
  commitsByWeekVue,
  weekSerialized,
} from '../../mocks/commitsByWeek';
import { ChartCard } from '../ChartCard';

export function ChartLine() {
  return (
    <ChartCard
      content={
        <Line
          data={{
            labels: weekSerialized,
            datasets: [
              {
                label: 'React',
                data: commitsByWeekReact.map(({ total }) => total),
                borderColor: '#61dafb',
                backgroundColor: '#61dafb',
              },
              {
                label: 'Angular',
                data: commitsByWeekAngular.map(({ total }) => total),
                borderColor: '#bb002e',
                backgroundColor: '#bb002e',
              },
              {
                label: 'Vue',
                data: commitsByWeekVue.map(({ total }) => total),
                borderColor: '#3eaf7c',
                backgroundColor: '#3eaf7c',
              },
              {
                label: 'Jquery',
                data: commitsByWeekJquery.map(({ total }) => total),
                borderColor: '#1064a5',
                backgroundColor: '#1064a5',
              },
              {
                label: 'Svelte',
                data: commitsByWeekSvelte.map(({ total }) => total),
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
      }
      title="Quantidade de commits no ultimo ano"
    />
  );
}
