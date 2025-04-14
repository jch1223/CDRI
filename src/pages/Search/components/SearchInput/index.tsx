import { useState, useRef, useEffect } from 'react';

import { CloseIcon } from '@/assets/Icons/Close';
import { SearchIcon } from '@/assets/Icons/Search';
import { AdornmentInput } from '@/components/ui/AdornmentInput';
import { cn } from '@/lib/utils';
import { useSearchHistoryStore } from '@/pages/Search/components/SearchInput/hooks/useSearchHistory';
import { useSearchParamsStore } from '@/pages/Search/hooks/useSearchParams';

interface SearchInputProps {
  className?: string;
}

export const SearchInput = ({ className }: SearchInputProps) => {
  const [viewQuery, setViewQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const setSearchParams = useSearchParamsStore(
    (state) => state.setSearchParams
  );

  const searchHistory = useSearchHistoryStore((state) => state.searchHistory);
  const addSearchHistory = useSearchHistoryStore(
    (state) => state.addSearchHistory
  );
  const deleteSearchHistory = useSearchHistoryStore(
    (state) => state.deleteSearchHistory
  );

  const containerRef = useRef<HTMLFormElement>(null);

  const showSearchHistory = isFocused && searchHistory.length > 0;

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

  const handleFocusOut = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setIsFocused(false);
  };

  const handleSearch = (query: string) => {
    setSearchParams({ query });
    setViewQuery(query);
    addSearchHistory(viewQuery);
    handleFocusOut();
  };

  return (
    <form
      className={cn('relative', className)}
      ref={containerRef}
      onSubmit={(e) => {
        e.preventDefault();

        handleSearch(viewQuery);
      }}
    >
      <AdornmentInput
        containerClassName={cn(
          'rounded-full border-none bg-lightGray h-[50px]',
          showSearchHistory && 'rounded-b-none rounded-t-3xl bg-lightGray'
        )}
        value={viewQuery}
        startAdornment={<SearchIcon />}
        placeholder="검색어를 입력하세요"
        onFocus={() => setIsFocused(true)}
        onChange={(e) => setViewQuery(e.target.value)}
      />

      {showSearchHistory && (
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
                  onClick={() => deleteSearchHistory(query)}
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
