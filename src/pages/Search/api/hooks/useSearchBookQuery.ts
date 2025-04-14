import { useSuspenseQuery } from '@tanstack/react-query';

import { searchBookApi } from '@/pages/Search/api/searchBookApi';

import type { BookSearchRequest } from '@/pages/Search/api/searchBookApi';

export const searchBookQueryKeys = {
  all: ['searchBook'],
  list: (searchParams: BookSearchRequest) => [
    ...searchBookQueryKeys.all,
    searchParams,
  ],
};

export const useGetSearchBookQuery = (searchParams: BookSearchRequest) => {
  return useSuspenseQuery({
    queryKey: searchBookQueryKeys.list(searchParams),
    queryFn: () => searchBookApi.get(searchParams),
  });
};
