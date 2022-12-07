import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { api } from '../core/api';

export function useFetch<DataType>(path: string, requestConfig?: AxiosRequestConfig) {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      api
        .get(path, requestConfig)
        .then(response => {
          setData(response.data);
        })
        .catch(console.error)
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const reFetch = useCallback(() => {
    setLoading(true);
  }, []);

  return { data, loading, reFetch };
}
