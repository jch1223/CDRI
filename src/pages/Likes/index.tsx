import { BookItem } from '@/components/BookItem';
import { EmptyContent } from '@/components/EmptyContent';
import { ResultCount } from '@/components/ResultCount';
import { useLikeBooksStore } from '@/pages/Likes/hooks/useLikeBooks';

export const LikesPage = () => {
  const likeBooks = useLikeBooksStore((state) => state.likeBooks);
  const count = Object.keys(likeBooks).length;

  return (
    <div className="my-20">
      <h1 className="mb-4 text-typography-title text-h2-bold">내가 찜한 책</h1>

      <ResultCount description="찜한 책" count={count} />

      <div className="flex flex-col gap-4">
        {count === 0 ? (
          <EmptyContent description="찜한 책이 없습니다." />
        ) : (
          Object.values(likeBooks).map((book) => (
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
          ))
        )}
      </div>
    </div>
  );
};
