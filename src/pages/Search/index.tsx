import { SearchInput } from '@/pages/Search/SearchInput';

export const Search = () => {
  const handleSearch = (query: string) => {
    console.log(`검색: ${query}`);
  };

  return (
    <div className="my-20">
      <h1 className="text-typography-title text-h2-bold">도서 검색</h1>
      <SearchInput onSearch={handleSearch} />
    </div>
  );
};
