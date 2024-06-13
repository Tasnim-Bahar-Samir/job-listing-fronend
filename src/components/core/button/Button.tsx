import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'rounded-[10px] transition-all outline-none hover:text-white disabled:text-white-800 disabled:border md:font-semibold xl:text-lg',
  {
    variants: {
      variant: {
        roundedBtn:
          'leading-none rounded-[33px] text-white bg-blue-500 hover:bg-blue-700  py-[14px] px-6 md:px-[30px] md:py-[16px] xl:py-[18px] disabled:bg-white-500 ',
        primaryBtn:
          'rounded-[10px] text-white bg-blue-500 hover:bg-blue-700 py-[14px] px-6 md:px-[30px] md:py-[16px] xl:py-[18px] disabled:bg-white-500 ',
        regulerBtn:
          'rounded-[10px] text-white bg-blue-500 hover:bg-blue-700 py-[14px]  px-6 md:px-[30px] md:py-[16px] xl:py-[18px] disabled:bg-white-500  ',
        outlineBtn:
          'border border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700  py-[14px] px-3 md:px-[30px] md:py-[16px] xl:py-[18px]  disabled:border-white-800',
        textBtn:
          'text-blue-500 hover:text-blue-700 border-none py-[14px] px-6 md:px-[30px] md:py-[16px] xl:py-[18px] ',
      },
    },
    defaultVariants: {
      variant: 'roundedBtn',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  icon?: any;
  reverse?: boolean;
  isOutline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  label,
  icon,
  reverse,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${cn(buttonVariants({ variant, className }))}`} {...props}>
      <div
        className={`leading-none ${icon && 'flex justify-center items-center gap-2'} ${
          reverse ? 'flex-row-reverse gap-2' : 'flex-row'
        }`}
      >
        <span className="min-w-fit">{label}</span>
        <span>{icon && <>{icon}</>}</span>
      </div>
    </button>
  );
};

export default Button;
