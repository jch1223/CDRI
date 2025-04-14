interface ResultCountProps {
  description: string;
  count: number;
}

export const ResultCount = ({ description, count }: ResultCountProps) => {
  return (
    <div className="mb-9 flex gap-4 text-[16px]/[24px] font-medium text-typography-primary">
      <span>{description}</span>
      <span>
        총 <span className="text-primary">{count}</span>건
      </span>
    </div>
  );
};
