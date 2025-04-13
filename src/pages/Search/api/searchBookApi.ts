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

export interface BookSearchRequest {
  query: string;
  sort?: 'accuracy' | 'latest';
  page?: number;
  size?: number;
  target?: 'title' | 'person' | 'publisher';
}

export interface BookSearchResponse {
  documents: Author[];
  meta: BookSearchMeta;
}

export const searchBookApi = {
  get: async (query: BookSearchRequest) => {
    const response = await ky(`${API_URL}/v3/search/book`, {
      searchParams: {
        query: query.query,
        sort: query.sort || 'accuracy',
        page: query.page || 1,
        size: query.size || 10,
        target: query.target || '',
      },
      headers: {
        Authorization: `KakaoAK ${API_KEY}`,
      },
    });

    return response.json<BookSearchResponse>();
  },
};
