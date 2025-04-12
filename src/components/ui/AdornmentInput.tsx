import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export const AdornmentInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    containerClassName?: string;
  }
>(
  (
    {
      className,
      containerClassName,
      type,
      startAdornment,
      endAdornment,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'border-input flex h-10 items-center justify-center gap-2.5 rounded-md border bg-transparent px-2.5 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
          containerClassName
        )}
        data-disabled={props.disabled}
      >
        {startAdornment && <div>{startAdornment}</div>}
        <input
          type={type}
          className={cn(
            'flex h-full w-full rounded-md border-none bg-transparent py-2 text-sm shadow-none outline-none',
            className
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && <div>{endAdornment}</div>}
      </div>
    );
  }
);
AdornmentInput.displayName = 'AdornmentInput';
