import ky from 'ky';

import { API_KEY, API_URL } from '@/config/api';

export interface Author {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface BookSearchMeta {
  is_end: boolean;
  pageable_count: number;
  total_count: number;
}

export interface BookSearchResponse {
  documents: Author[];
  meta: BookSearchMeta;
}

export const searchBookApi = {
  get: async (query: string) => {
    const response = await ky(`${API_URL}/v3/search/book`, {
      searchParams: { query },
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    return response.json<BookSearchResponse>();
  },
};
