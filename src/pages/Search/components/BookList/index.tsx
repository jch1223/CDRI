import { useGetSearchBookQuery } from '@/pages/Search/api/hooks/useSearchBookQuery';

export const BookList = () => {
  const { data } = useGetSearchBookQuery('킵고잉');

  console.log(data);

  return <div>SearchContent</div>;
};
