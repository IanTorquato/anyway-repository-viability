import { Card } from 'antd';
import React, { ReactNode } from 'react';

type ChartCardProps = { title: string; content: ReactNode };

export function ChartCard({ title, content }: ChartCardProps) {
  return <Card title={title}>{content}</Card>;
}
