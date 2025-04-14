import { ChevronDown } from 'lucide-react';

import { FillLikeIcon } from '@/components/Icons/FillLike';
import { LineLikeIcon } from '@/components/Icons/LineLike';
import { Button } from '@/components/ui/Button';

interface CollapsedBookItemProps {
  title: string;
  authors: string[];
  thumbnail: string;
  sale_price: number;
  url: string;
  onClick: () => void;
}

export const CollapsedBookItem = ({
  title,
  authors,
  thumbnail,
  sale_price,
  url,
  onClick,
}: CollapsedBookItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative mx-12 my-4 flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="h-[68px] w-[46px] rounded-sm object-cover"
        />

        <span className="absolute right-0 top-0">
          <LineLikeIcon width={12} height={12} />
        </span>
      </div>

      <div className="flex flex-1 items-center gap-4">
        <span className="text-typography-primary text-h3-bold">{title}</span>
        <span className="text-typography-secondary text-b2-medium">
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
