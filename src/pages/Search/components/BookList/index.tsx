import { useGetSearchBookQuery } from '@/pages/Search/api/hooks/useSearchBookQuery';
import { BookItem } from '@/pages/Search/components/BookList/components/BookItem';

import type { BookSearchRequest } from '@/pages/Search/api/searchBookApi';

interface BookListProps {
  searchParams: BookSearchRequest;
}

export const BookList = ({ searchParams }: BookListProps) => {
  const { data } = useGetSearchBookQuery(searchParams);

  return (
    <>
      {data.documents.map((book) => (
        <BookItem
          key={book.isbn}
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
