import { create } from 'zustand';

import type { BookSearchRequest } from '@/pages/Search/api/searchBookApi';

interface SearchParamsState {
  searchParams: BookSearchRequest;
}

type SearchParamsAction = {
  setSearchParams: (searchParams: BookSearchRequest) => void;
  initializeSearchParams: () => void;
};

export const useSearchParamsStore = create<
  SearchParamsState & SearchParamsAction
>((set) => ({
  searchParams: {
    query: '',
  },
  setSearchParams: (searchParams) => set({ searchParams }),
  initializeSearchParams: () => set({ searchParams: { query: '' } }),
}));
