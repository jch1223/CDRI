import { useState } from 'react';

import { toast } from 'sonner';

import { CloseIcon } from '@/components/Icons/Close';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { colors } from '@/config/tailwind/colors';
import { TargetSelect } from '@/pages/Search/components/DetailSearch/components/TargetSelect';
import { useSearchParamsStore } from '@/pages/Search/hooks/useSearchParams';

import type { BookSearchTarget } from '@/pages/Search/api/searchBookApi';

export const DetailSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          상세 검색
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="relative w-[360px] px-6 py-9"
        side="bottom"
        sideOffset={16}
      >
        <DetailSearchForm onSubmit={handleSubmit} />
      </PopoverContent>
    </Popover>
  );
};

interface DetailSearchFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DetailSearchForm = ({ onSubmit }: DetailSearchFormProps) => {
  const [viewSearchQuery, setViewSearchQuery] = useState('');
  const [viewTarget, setViewTarget] = useState<BookSearchTarget>('title');

  const setSearchParams = useSearchParamsStore(
    (state) => state.setSearchParams
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = viewSearchQuery.trim();

    if (query === '') {
      toast.error('검색어를 입력해주세요.');
      return;
    }

    setSearchParams({
      query,
      target: viewTarget,
    });

    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PopoverClose className="absolute right-3 top-3" role="button">
        <CloseIcon width={12} height={12} color={colors.gray} />
      </PopoverClose>

      <div className="mb-4 flex gap-1">
        <TargetSelect
          value={viewTarget}
          onChange={(value) => setViewTarget(value)}
        />
        <Input
          className="!text-[14px]"
          placeholder="검색어를 입력해주세요."
          value={viewSearchQuery}
          onChange={(e) => setViewSearchQuery(e.target.value)}
        />
      </div>

      <Button
        className="h-9 w-full"
        variant="default"
        size="default"
        type="submit"
      >
        검색하기
      </Button>
    </form>
  );
};
