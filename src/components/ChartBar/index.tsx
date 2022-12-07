import { Col, Row } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { ChartCard } from '../ChartCard';

const attributeTitles = ['Forks', 'Issues', 'Stars', 'Watchers'];
const attributeKeys = ['forks_count', 'open_issues_count', 'stargazers_count', 'watchers_count'];

export type ChartBarProps = {
  dataReact: Record<string, unknown>;
  dataJquery: Record<string, unknown>;
  dataAngular: Record<string, unknown>;
  dataSvelte: Record<string, unknown>;
  dataVue: Record<string, unknown>;
};

export function ChartBar({ dataReact, dataJquery, dataAngular, dataSvelte, dataVue }: ChartBarProps) {
  const { md } = useBreakpoint();

  return (
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
  );
}
