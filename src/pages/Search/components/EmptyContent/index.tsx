import bookImage from '@/assets/images/book.png';

interface EmptyContentProps {
  description: string;
}
export const EmptyContent = ({ description }: EmptyContentProps) => {
  return (
    <div className="mt-[84px] flex flex-col items-center justify-center gap-6">
      <img src={bookImage} alt="책 이미지" />
      <span className="text-typography-secondary text-caption-medium">
        {description}
      </span>
    </div>
  );
};
