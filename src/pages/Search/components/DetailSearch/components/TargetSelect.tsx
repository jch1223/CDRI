import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

import type { BookSearchTarget } from '@/pages/Search/api/searchBookApi';

interface TargetSelectProps {
  value: BookSearchTarget;
  onChange: (value: BookSearchTarget) => void;
}

export const TargetSelect = ({ value, onChange }: TargetSelectProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="title">제목</SelectItem>
          <SelectItem value="person">저자</SelectItem>
          <SelectItem value="publisher">출판사</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
