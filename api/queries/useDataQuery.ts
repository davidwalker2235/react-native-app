import { useQuery } from 'react-query';
import client from '../client';

const fetchData = async () => {
  const response = await client.get('/');
  return response.data;
};

export const useDataQuery = () => {
  return useQuery('dataKey', fetchData);
};