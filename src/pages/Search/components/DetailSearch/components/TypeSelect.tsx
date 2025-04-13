import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

export const TypeSelect = () => {
  return (
    <Select defaultValue="title">
      <SelectTrigger className="w-[100px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="title">제목</SelectItem>
          <SelectItem value="author">저자</SelectItem>
          <SelectItem value="publisher">출판사</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
