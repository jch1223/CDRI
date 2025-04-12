import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export const Input = forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full border-b-[1px] border-primary px-2.5 outline-none text-caption-medium',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';
