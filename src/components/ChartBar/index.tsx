import { Col, Row } from 'antd';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useFetch } from '../../hooks/useFetch';
import { ChartCard } from '../ChartCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function ChartBar() {
  const labels = ['Watch', 'Stars', 'Issues', 'Forks'];

  const reactInfos = [6649, 198640, 1109, 41242];

  const angularInfos = [3045, 85273, 1323, 22632];

  const vueInfos = [6075, 201064, 592, 33115];

  const svelteInfos = [877, 63581, 835, 3107];

  const jqueryInfos = [3246, 57001, 94, 20658];

  const { data, loading } = useFetch('facebook/react');

  console.log({ data, loading });

  return (
    <Row gutter={[16, 0]}>
      {labels.map((name, index) => (
        <Col key={name} xs={12}>
          <ChartCard
            content={
              <Bar
                data={{
                  labels: [name],
                  datasets: [
                    {
                      label: 'React',
                      data: [reactInfos[index]],
                      backgroundColor: '#61dafb',
                    },
                    {
                      label: 'Angular',
                      data: [angularInfos[index]],
                      backgroundColor: '#bb002e',
                    },
                    {
                      label: 'Vue',
                      data: [vueInfos[index]],
                      backgroundColor: '#3eaf7c',
                    },
                    {
                      label: 'Svelte',
                      data: [svelteInfos[index]],
                      backgroundColor: '#f23b00',
                    },
                    {
                      label: 'Jquery',
                      data: [jqueryInfos[index]],
                      backgroundColor: '#1064a5',
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
                      display: false,
                    },
                  },
                }}
              />
            }
            title={name}
          />
        </Col>
      ))}
    </Row>
  );
}
