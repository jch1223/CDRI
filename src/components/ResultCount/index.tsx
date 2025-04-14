interface ResultCountProps {
  description: string;
  count: number;
}

export const ResultCount = ({ description, count }: ResultCountProps) => {
  return (
    <>
      <span>{description}</span>
      <span>
        총 <span className="text-primary">{count}</span>건
      </span>
    </>
  );
};
