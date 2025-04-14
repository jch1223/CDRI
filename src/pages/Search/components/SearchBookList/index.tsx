import { BookItem } from '@/components/BookItem';
import { useGetSearchBookQuery } from '@/pages/Search/api/hooks/useSearchBookQuery';

import type { BookSearchRequest } from '@/pages/Search/api/searchBookApi';

interface SearchBookListProps {
  searchParams: BookSearchRequest;
}

export const SearchBookList = ({ searchParams }: SearchBookListProps) => {
  const { data } = useGetSearchBookQuery(searchParams);

  return (
    <>
      {data.documents.map((book) => (
        <BookItem
          key={book.isbn}
          isbn={book.isbn}
          title={book.title}
          authors={book.authors}
          thumbnail={book.thumbnail}
          contents={book.contents}
          sale_price={book.sale_price}
          price={book.price}
          url={book.url}
        />
      ))}
    </>
  );
};
