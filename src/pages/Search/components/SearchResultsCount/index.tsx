import { ResultCount } from '@/components/ResultCount';
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
  return <ResultCount description="도서 검색 결과" count={count} />;
};

SearchResultsCount.Display = Display;
