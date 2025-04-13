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
import { TypeSelect } from '@/pages/Search/components/DetailSearch/components/TypeSelect';

export const DetailSearch = () => {
  return (
    <Popover>
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
        <PopoverClose className="absolute right-3 top-3">
          <CloseIcon width={12} height={12} color={colors.gray} />
        </PopoverClose>

        <div className="mb-4 flex gap-1">
          <TypeSelect />
          <Input
            className="!text-[14px]"
            placeholder="검색어를 입력해주세요."
          />
        </div>

        <Button className="h-9 w-full" variant="default" size="default">
          검색하기
        </Button>
      </PopoverContent>
    </Popover>
  );
};
