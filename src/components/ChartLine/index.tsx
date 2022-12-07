import { Col, Row } from 'antd';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { ChartCard } from '../ChartCard';

import { CommitByWeekType } from './types';
import { serializedWeeks } from './utils/serializedWeeks';

export type ChartLineProps = {
  commitsByWeekReact: CommitByWeekType[];
  commitsByWeekJquery: CommitByWeekType[];
  commitsByWeekAngular: CommitByWeekType[];
  commitsByWeekSvelte: CommitByWeekType[];
  commitsByWeekVue: CommitByWeekType[];
};

export function ChartLine({ commitsByWeekReact, commitsByWeekJquery, commitsByWeekAngular, commitsByWeekSvelte, commitsByWeekVue }: ChartLineProps) {
  const commitsByWeek = commitsByWeekReact && Array.isArray(commitsByWeekReact) ? serializedWeeks(commitsByWeekReact.map(({ week }) => week)) : undefined;

  return (
    <Row gutter={[24, 24]} style={{ width: '100%', margin: '16px 0' }}>
      <Col span={24}>
        <ChartCard
          content={
            <Line
              data={{
                labels: commitsByWeek,
                datasets: [
                  {
                    label: 'React',
                    data: Array.isArray(commitsByWeekReact) ? commitsByWeekReact?.map(({ total }) => total) : undefined,
                    borderColor: '#61dafb',
                    backgroundColor: '#61dafb',
                  },
                  {
                    label: 'Angular',
                    data: Array.isArray(commitsByWeekReact) ? commitsByWeekAngular?.map(({ total }) => total) : undefined,
                    borderColor: '#bb002e',
                    backgroundColor: '#bb002e',
                  },
                  {
                    label: 'Vue',
                    data: Array.isArray(commitsByWeekReact) ? commitsByWeekVue?.map(({ total }) => total) : undefined,
                    borderColor: '#3eaf7c',
                    backgroundColor: '#3eaf7c',
                  },
                  {
                    label: 'Jquery',
                    data: Array.isArray(commitsByWeekReact) ? commitsByWeekJquery?.map(({ total }) => total) : undefined,
                    borderColor: '#1064a5',
                    backgroundColor: '#1064a5',
                  },
                  {
                    label: 'Svelte',
                    data: Array.isArray(commitsByWeekReact) ? commitsByWeekSvelte?.map(({ total }) => total) : undefined,
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
      </Col>
    </Row>
  );
}
