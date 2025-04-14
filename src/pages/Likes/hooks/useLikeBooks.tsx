import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LikeBook {
  title: string;
  authors: string[];
  thumbnail: string;
  contents: string;
  sale_price: number;
  price: number;
  url: string;
  isbn: string;
}

interface LikeBooksState {
  likeBooks: Record<string, LikeBook>;
}

type LikeBooksAction = {
  addLikeBook: (book: LikeBook) => void;
  removeLikeBook: (bookId: string) => void;
};

export const useLikeBooksStore = create<LikeBooksState & LikeBooksAction>()(
  persist(
    (set) => ({
      likeBooks: {},
      addLikeBook: (book) =>
        set((state) => ({
          likeBooks: { ...state.likeBooks, [book.isbn]: book },
        })),
      removeLikeBook: (bookIsbn) =>
        set((state) => ({
          likeBooks: Object.fromEntries(
            Object.entries(state.likeBooks).filter(([key]) => key !== bookIsbn)
          ),
        })),
    }),
    { name: 'likeBooks' }
  )
);
