import { useSuspenseQuery } from '@tanstack/react-query';

import { searchBookApi } from '@/pages/Search/api/searchBookApi';

const searchBookQueryKeys = {
  all: ['searchBook'],
  list: (query: string) => [...searchBookQueryKeys.all, query],
};

export const useGetSearchBookQuery = (query: string) => {
  return useSuspenseQuery({
    queryKey: [searchBookQueryKeys.list(query)],
    queryFn: () => searchBookApi.get(query),
  });
};
