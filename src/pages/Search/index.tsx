import { DetailSearch } from '@/pages/Search/components/DetailSearch';
import { SearchInput } from '@/pages/Search/components/SearchInput';

export const Search = () => {
  const handleSearch = (query: string) => {
    console.log(`검색: ${query}`);
  };

  return (
    <div className="my-20">
      <h1 className="mb-4 text-typography-title text-h2-bold">도서 검색</h1>

      <div className="flex items-center gap-4">
        <SearchInput className="w-[480px]" onSearch={handleSearch} />
        <DetailSearch />
      </div>
    </div>
  );
};
