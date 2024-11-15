import { ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ISpinnerProps extends ComponentPropsWithRef<'div'> {}

export const Spinner = (props: ISpinnerProps) => {
  return (
    <div
      className={twMerge(
        'flex h-full w-full items-center justify-center',
        props?.className
      )}
    >
      <svg
        className='h-4 w-4 animate-spin text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <circle
          className='stroke-zinc-300 opacity-25'
          cx='12'
          cy='12'
          r='10'
          strokeWidth='4'
        ></circle>
        <path
          className='fill-primary opacity-75'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
    </div>
  );
};
