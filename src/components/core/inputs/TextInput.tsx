import { cn } from '@/libs/utils';
import { cva } from 'class-variance-authority';
import React from 'react';
// focus:border-[2px]
const inputVariants = cva(
  'border border-blue-500  outline-none bg-inherit py-2.5 px-4  placeholder:text-black peer disabled:border-white-500 disabled:placeholder:text-white-700 ',
  {
    variants: {
      variant: {
        regularInput: 'rounded-[10px]',
        roundedInput: 'rounded-[30px]',
      },
    },
    defaultVariants: {
      variant: 'regularInput',
    },
  },
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  variant?: any;
  label?: string;
  error?: any;
  icon?: any;
  id: string;
}

const TextInput: React.FC<InputProps> = ({
  label,
  variant,
  icon,
  className,
  id,
  error,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div>
      <div className="">
        <div className="relative rounded-[10px] flex items-center ">
          <input
            autoComplete="off"
            type="text"
            id={id}
            className={` ${icon && 'pr-8'} ${
              error && 'border-red-500 placeholder:text-red-500'
            } ${cn(inputVariants({ variant, className }))}`}
            {...props}
            placeholder={placeholder ? placeholder : ''}
          />
          <div className={`-mx-8 ${error && 'text-red-500'}`}>{icon && <>{icon}</>}</div>

          <label
            htmlFor={id}
            className={`absolute rounded-[15px] text-sm transform bg-white
          -translate-y-4 scale-75 px-4 top-1 z-10 origin-[0] duration-300 md:text-base  
          peer-focus:px-4 peer-focus:bg-white peer-focus:top-2 peer-focus:scale-75 
          peer-focus:-translate-y-5
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:-translate-y-1/2
          rtl:peer-focus:translate-x-1/4 
          rtl:peer-focus:left-auto start-1 
          ${error ? 'text-red-500' : 'text-black'}`}
          >
            {label}
          </label>
        </div>

        {error && <p className="py-1 text-red-500 text-left">{error}</p>}
      </div>
    </div>
  );
};

export default TextInput;
