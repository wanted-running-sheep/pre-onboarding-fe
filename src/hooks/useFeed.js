import { request } from '../api/api';
import { useQuery } from 'react-query';

const fetchFeedData = async () => {
  const { data } = await request.get('/feed.json');
  return data;
};

export const useFeed = () => {
  return useQuery(['feed'], () => fetchFeedData());
};
