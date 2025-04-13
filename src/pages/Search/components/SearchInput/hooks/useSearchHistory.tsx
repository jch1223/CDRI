import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SearchHistoryState = {
  searchHistory: string[];
};

type SearchHistoryAction = {
  addSearchHistory: (query: string) => void;
  deleteSearchHistory: (query: string) => void;
};

export const useSearchHistoryStore = create<
  SearchHistoryState & SearchHistoryAction
>()(
  persist(
    (set, get) => ({
      searchHistory: [],
      addSearchHistory: (query) => {
        if (query.trim() === '') return;

        const currentHistory = get().searchHistory;
        const newHistory = [
          query,
          ...currentHistory.filter((item) => item !== query),
        ].slice(0, 5);

        return set(() => ({ searchHistory: newHistory }));
      },
      deleteSearchHistory: (query) => {
        const currentHistory = get().searchHistory;
        const newHistory = currentHistory.filter((item) => item !== query);

        return set(() => ({ searchHistory: newHistory }));
      },
    }),
    { name: 'searchHistory' }
  )
);
