export const ChevronDown = ({
  width = 20,
  height = 20,
  color = '#B1B8C0',
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.5 8L9.25 11.75L13 8L14.5 8.75L9.25 14L4 8.75L5.5 8Z"
        fill={color}
      />
    </svg>
  );
};
