import { useGetSearchBookQuery } from '@/pages/Search/api/hooks/useSearchBookQuery';

interface SearchResultsCountProps {
  query: string;
}

export const SearchResultsCount = ({ query }: SearchResultsCountProps) => {
  const { data } = useGetSearchBookQuery({ query });

  return <Display count={data.meta.total_count ?? 0} />;
};

interface DisplayProps {
  count: number;
}

const Display = ({ count }: DisplayProps) => {
  return (
    <>
      <span>도서 검색 결과</span>
      <span>
        총 <span className="text-primary">{count}</span>건
      </span>
    </>
  );
};

SearchResultsCount.Display = Display;
