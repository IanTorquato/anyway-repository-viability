import { Card } from 'antd';
import React, { ReactNode, useState } from 'react';

import styles from './card.module.css';

type ChartCardProps = { title: string; content: ReactNode };

export function ChartCard({ title, content }: ChartCardProps) {
  const [state, setState] = useState('Card');

  return (
    <Card className={styles['ant-card']} title={title}>
      {content}
    </Card>
  );
}
