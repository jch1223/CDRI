import { ChevronUp } from 'lucide-react';

import { LineLikeIcon } from '@/components/Icons/LineLike';
import { Button } from '@/components/ui/Button';

interface ExpandedBookItemProps {
  title: string;
  authors: string[];
  thumbnail: string;
  contents: string;
  price: number;
  sale_price: number;
  url: string;
  onClick: () => void;
}

export const ExpandedBookItem = ({
  title,
  authors,
  thumbnail,
  contents,
  price,
  sale_price,
  url,
  onClick,
}: ExpandedBookItemProps) => {
  return (
    <div className="flex pb-[38px] pt-[70px]">
      <div className="relative ml-12 mr-8 flex-shrink-0">
        <img
          src={thumbnail}
          alt={title}
          className="h-[280px] w-[210px] rounded-sm object-cover"
        />

        <span className="absolute right-[10px] top-[10px]">
          <LineLikeIcon />
        </span>
      </div>

      <div className="mr-[48px] flex flex-1 flex-col justify-end">
        <div className="mb-4 flex items-center gap-4">
          <span className="text-typography-primary text-h3-bold">{title}</span>
          <span className="text-typography-secondary text-b2-medium">
            {authors.join(', ')}
          </span>
        </div>

        <span className="mb-3 text-[14px]/[26px] font-bold text-typography-primary">
          책 소개
        </span>

        <p className="text-typography-secondary text-b2-medium">
          {contents}...
        </p>
      </div>

      <div className="flex flex-col items-end justify-between">
        <Button
          className="mb-[94px] h-12 w-[115px] rounded-md"
          variant="secondary"
          onClick={onClick}
        >
          <div className="flex items-center gap-2">
            <span className="mt-1">상세보기</span>
            <ChevronUp className="text-[#B1B8C0]" />
          </div>
        </Button>

        <div className="flex flex-1 flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px]/[22px] text-typography-subTitle">
              원가
            </span>
            <span className="text-[18px]/[26px] font-[350] text-typography-primary line-through">
              {price.toLocaleString()}원
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px]/[22px] text-typography-subTitle">
              할인가
            </span>
            <span className="text-[18px]/[26px] font-bold text-typography-primary">
              {sale_price.toLocaleString()}원
            </span>
          </div>
        </div>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button className="h-12 w-[240px] rounded-md">구매하기</Button>
        </a>
      </div>
    </div>
  );
};
