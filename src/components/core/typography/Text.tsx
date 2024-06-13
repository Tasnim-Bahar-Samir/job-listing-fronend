import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const textVariants = cva('leading-none ', {
  variants: {
    variant: {
      header_1: 'font-bold text-[1.063rem] leading-none md:text-[1.25rem] xl:text-[1.375rem]',
      header_2: 'font-bold text-[1.125rem] leading-none md:text-[1.375rem] xl:text-[1.5rem]',
      header_3: 'font-bold text-[1.25rem] leading-none md:text-[1.5rem] xl:text-[1.75rem]',
      header_4: 'font-bold text-[1.5rem] leading-none md:text-[1.75rem] xl:text-[2.25rem]',
      header_5: 'font-bold text-[1.625rem] leading-none md:text-[1.875rem] xl:text-[2.75rem]',
      header_6: 'font-bold text-[1.75rem] leading-none md:text-[2.125rem] xl:text-[3.5rem]',
      header_7: 'font-bold text-[2rem] leading-none md:text-[2.5rem] xl:text-[4.125rem]',
      header_8: 'font-bold text-[2.5rem] leading-none md:text-[3rem] xl:text-[4.5rem]',
      title_1: 'font-semibold text-[0.938rem] leading-none md:text-[1rem] xl:text-[1.125rem]',
      title_2: 'font-semibold text-[1rem] leading-none md:text-[1.125rem] xl:text-[1.375rem]',
      title_3: 'font-semibold text-[1.125rem] leading-none md:text-[1.25rem] xl:text-[1.5rem]',
      title_4:
        'font-semibold text-[1.125rem] leading-none md:text-[1.625rem] xl:text-[1.875rem]',
      title_5: 'font-semibold text-[1.5rem] leading-none md:text-[1.875rem] xl:text-[2.25rem]',
      paragraph_1:
        'font-normal text-[0.75rem] leading-none md:font-semibold md:text-[0.875rem] xl:font-normal xl:text-[0.875rem]',
      paragraph_2:
        'font-semibold text-[0.75rem] leading-none md:text-[0.875rem] xl:font-normal xl:text-[1rem]',
      paragraph_3: ' text-[0.938rem] leading-none md:text-[1rem]  xl:text-[1.125rem]',

      button_1: 'text-[1rem] font-normal leading-none',
      button_2: 'text-[1rem] font-semibold leading-none',
      button_3: 'text-[1.125rem] font-normal leading-none',
      button_4: 'text-[1.125rem] font-semibold leading-none',
      level: 'text-[0.875rem] leading-none',
    },
  },
  defaultVariants: {
    // variant: 'd1',
  },
});

export interface TextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof textVariants> {
  label: string | number;
}

const Text: React.FC<TextProps> = ({ variant, className, label, ...props }: TextProps) => {
  return (
    <span className={cn(textVariants({ variant, className }))} {...props}>
      {label}
    </span>
  );
};

export default Text;
