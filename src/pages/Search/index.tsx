import { Suspense } from 'react';

import { EmptyContent } from '@/components/EmptyContent';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { DetailSearch } from '@/pages/Search/components/DetailSearch';
import { SearchBookList } from '@/pages/Search/components/SearchBookList';
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

      <ErrorBoundary fallback={<SearchResultsCount.Display count={0} />}>
        <Suspense fallback={<SearchResultsCount.Display count={0} />}>
          {searchParams.query ? (
            <SearchResultsCount query={searchParams.query} />
          ) : (
            <SearchResultsCount.Display count={0} />
          )}
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col gap-4">
            {searchParams.query ? (
              <SearchBookList searchParams={searchParams} />
            ) : (
              <EmptyContent description="검색된 결과가 없습니다." />
            )}
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
