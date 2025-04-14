import { useState } from 'react';

import { CollapsedBookItem } from '@/pages/Search/components/BookList/components/CollapsedBookItem';
import { ExpandedBookItem } from '@/pages/Search/components/BookList/components/ExpandedBookItem';

interface BookItemProps {
  title: string;
  authors: string[];
  thumbnail: string;
  contents: string;
  sale_price: number;
  price: number;
  url: string;
}

export const BookItem = ({
  title,
  authors,
  thumbnail,
  contents,
  sale_price,
  price,
  url,
}: BookItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-[#D2D6DA] pr-4">
      {isExpanded ? (
        <ExpandedBookItem
          title={title}
          authors={authors}
          thumbnail={thumbnail}
          contents={contents}
          price={price}
          sale_price={sale_price}
          url={url}
          onClick={handleExpanded}
        />
      ) : (
        <CollapsedBookItem
          title={title}
          authors={authors}
          thumbnail={thumbnail}
          sale_price={sale_price}
          url={url}
          onClick={handleExpanded}
        />
      )}
    </div>
  );
};
