import { SyntheticEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface IDynamicImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  onClick?: (e: SyntheticEvent) => void;
  figcaption?: string;
  disableDrag?: boolean;
  circle?: boolean;
}

function DynamicImage(props: IDynamicImageProps) {
  const {
    src,
    alt,
    width,
    height,
    className,
    imageClassName,
    onClick,
    figcaption,
    circle,
  } = props;

  return (
    <figure className={twMerge('h-full w-full', className)}>
      <div
        onClick={onClick}
        className={twMerge(
          'h-full w-full',
          circle && 'overflow-hidden rounded-full'
        )}
      >
        <img
          loading='lazy'
          width={width}
          height={height}
          alt={alt}
          src={src}
          className={twMerge('h-full w-full object-cover', imageClassName)}
        />
      </div>
      {figcaption && (
        <figcaption className='mt-2 w-full text-center text-xs italic text-zinc-500'>
          {figcaption}
        </figcaption>
      )}
    </figure>
  );
}

export default DynamicImage;
