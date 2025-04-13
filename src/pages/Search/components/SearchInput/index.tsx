import { useState, useRef, useEffect } from 'react';

import { CloseIcon } from '@/components/Icons/Close';
import { SearchIcon } from '@/components/Icons/Search';
import { AdornmentInput } from '@/components/ui/AdornmentInput';
import { cn } from '@/lib/utils';

interface SearchInputProps {
  className?: string;
  onSearch: (query: string) => void;
}

export const SearchInput = ({ className, onSearch }: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const containerRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAddHistory = (query: string) => {
    if (query.trim() === '') return;

    const newHistory = [
      query,
      ...searchHistory.filter((item) => item !== query),
    ].slice(0, 5);
    setSearchHistory(newHistory);

    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleSearch = (query: string) => {
    onSearch(query);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setIsFocused(false);
  };

  const handleDeleteHistory = (query: string) => {
    const newHistory = searchHistory.filter((item) => item !== query);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  return (
    <form
      className={cn('relative', className)}
      ref={containerRef}
      onSubmit={(e) => {
        e.preventDefault();

        handleAddHistory(searchQuery);
        handleSearch(searchQuery);
      }}
    >
      <AdornmentInput
        containerClassName={cn(
          'rounded-full border-none bg-lightGray h-[50px]',
          isFocused && 'rounded-b-none rounded-t-3xl bg-lightGray'
        )}
        startAdornment={<SearchIcon />}
        placeholder="검색어를 입력하세요"
        onFocus={() => setIsFocused(true)}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {isFocused && searchHistory.length > 0 && (
        <div className="absolute left-0 right-0 top-full rounded-b-3xl bg-lightGray py-3 pl-10 pr-5">
          <ul>
            {searchHistory.map((query) => (
              <li
                key={query}
                className="flex items-center justify-between px-3 py-2 hover:bg-slate-100"
              >
                <button
                  type="button"
                  className="flex flex-grow items-center gap-2 text-left"
                  onClick={() => handleSearch(query)}
                >
                  <span>{query}</span>
                </button>
                <button
                  type="button"
                  className="ml-2 flex items-center justify-center"
                  onClick={() => handleDeleteHistory(query)}
                  aria-label={`${query} 검색어 삭제`}
                >
                  <CloseIcon />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};
