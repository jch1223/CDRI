import { ChevronDown } from 'lucide-react';

import { Thumbnail } from '@/components/BookItem/Thumbnail';
import { Button } from '@/components/ui/Button';

interface CollapsedBookItemProps {
  isbn: string;
  title: string;
  authors: string[];
  thumbnail: string;
  sale_price: number;
  url: string;
  contents: string;
  price: number;
  onClick: () => void;
}

export const CollapsedBookItem = ({
  isbn,
  title,
  authors,
  thumbnail,
  sale_price,
  url,
  contents,
  price,
  onClick,
}: CollapsedBookItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <Thumbnail
        size="sm"
        isbn={isbn}
        title={title}
        authors={authors}
        thumbnail={thumbnail}
        sale_price={sale_price}
        url={url}
        contents={contents}
        price={price}
      />

      <div className="mr-4 flex flex-1 items-center gap-4">
        <span className="flex-[2] text-typography-primary text-h3-bold">
          {title}
        </span>
        <span className="flex-[1] text-typography-secondary text-b2-medium">
          {authors.join(', ')}
        </span>
      </div>

      <div className="flex items-center">
        <span className="mr-14 text-typography-title text-h3-bold">
          {sale_price.toLocaleString()}원
        </span>

        <div className="flex gap-2">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button className="h-12 w-[115px] rounded-md">구매하기</Button>
          </a>

          <Button
            className="h-12 w-[115px] rounded-md"
            variant="secondary"
            onClick={onClick}
          >
            <div className="flex items-center gap-2">
              <span>상세보기</span>
              <ChevronDown className="text-[#B1B8C0]" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
