import { Suspense } from 'react';

import { BookList } from '@/pages/Search/components/BookList';
import { DetailSearch } from '@/pages/Search/components/DetailSearch';
import { EmptyContent } from '@/pages/Search/components/EmptyContent';
import { SearchInput } from '@/pages/Search/components/SearchInput';
import { SearchResultsCount } from '@/pages/Search/components/SearchResultsCount';
import { useSearchParamsStore } from '@/pages/Search/hooks/useSearchParams';

export const SearchPage = () => {
  const searchParams = useSearchParamsStore((state) => state.searchParams);

  return (
    <div className="my-20">
      <h1 className="mb-4 text-typography-title text-h2-bold">도서 검색</h1>

      <div className="mb-6 flex items-center gap-4">
        <SearchInput className="w-[480px]" />
        <DetailSearch />
      </div>

      <Suspense fallback={<SearchResultsCount.Display count={0} />}>
        <div className="mb-9 flex gap-4 text-[16px]/[24px] font-medium text-typography-primary">
          {searchParams.query ? (
            <SearchResultsCount query={searchParams.query} />
          ) : (
            <SearchResultsCount.Display count={0} />
          )}
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-4">
          {searchParams.query ? (
            <BookList searchParams={searchParams} />
          ) : (
            <EmptyContent description="검색된 결과가 없습니다." />
          )}
        </div>
      </Suspense>
    </div>
  );
};
