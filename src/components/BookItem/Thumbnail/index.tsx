import { FillLikeIcon } from '@/assets/Icons/FillLike';
import { LineLikeIcon } from '@/assets/Icons/LineLike';
import { cn } from '@/lib/utils';
import { useLikeBooksStore } from '@/pages/Likes/hooks/useLikeBooks';

interface ThumbnailProps {
  isbn: string;
  title: string;
  authors: string[];
  thumbnail: string;
  sale_price: number;
  url: string;
  contents: string;
  price: number;
  size: 'sm' | 'lg';
}

export const Thumbnail = ({
  size,
  isbn,
  title,
  authors,
  thumbnail,
  sale_price,
  url,
  contents,
  price,
}: ThumbnailProps) => {
  const { imageSize, iconSize } = {
    sm: {
      imageSize: 'h-[68px] w-[46px]',
      iconSize: 12,
    },
    lg: {
      imageSize: 'h-[280px] w-[210px]',
      iconSize: 24,
    },
  }[size];

  const likeBooks = useLikeBooksStore((state) => state.likeBooks);
  const addLikeBook = useLikeBooksStore((state) => state.addLikeBook);
  const removeLikeBook = useLikeBooksStore((state) => state.removeLikeBook);

  const isLiked = !!likeBooks[isbn];

  const handleLikeClick = () => {
    if (isLiked) {
      removeLikeBook(isbn);
    } else {
      addLikeBook({
        isbn,
        title,
        authors,
        thumbnail,
        sale_price,
        url,
        contents,
        price,
      });
    }
  };

  return (
    <div className="relative mx-12 my-4 flex-shrink-0">
      <img
        src={thumbnail}
        alt={title}
        className={cn(imageSize, 'rounded-sm object-cover')}
      />

      <button className="absolute right-0 top-0" onClick={handleLikeClick}>
        {isLiked ? (
          <FillLikeIcon width={iconSize} height={iconSize} />
        ) : (
          <LineLikeIcon width={iconSize} height={iconSize} />
        )}
      </button>
    </div>
  );
};
