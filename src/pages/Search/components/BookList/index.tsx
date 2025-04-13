import { useGetSearchBookQuery } from '@/pages/Search/api/hooks/useSearchBookQuery';

import type { BookSearchRequest } from '@/pages/Search/api/searchBookApi';

interface BookListProps {
  searchParams: BookSearchRequest;
}

export const BookList = ({ searchParams }: BookListProps) => {
  const { data } = useGetSearchBookQuery(searchParams);

  return <div>{JSON.stringify(data)}</div>;
};
