import { Suspense } from 'react';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { BookList } from '@/pages/Search/components/BookList';
import { DetailSearch } from '@/pages/Search/components/DetailSearch';
import { EmptyContent } from '@/pages/Search/components/EmptyContent';
import { SearchInput } from '@/pages/Search/components/SearchInput';

export const SearchPage = () => {
  const handleSearch = (query: string) => {
    console.log(`검색: ${query}`);
  };

  return (
    <div className="my-20">
      <h1 className="mb-4 text-typography-title text-h2-bold">도서 검색</h1>

      <div className="mb-6 flex items-center gap-4">
        <SearchInput className="w-[480px]" onSearch={handleSearch} />
        <DetailSearch />
      </div>

      <div className="mb-9 flex gap-4 text-[16px]/[24px] font-medium text-typography-primary">
        <span>도서 검색 결과</span>
        <span>
          총 <span className="text-primary">0</span>건
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            {false ? (
              <BookList />
            ) : (
              <EmptyContent description="검색된 결과가 없습니다." />
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
