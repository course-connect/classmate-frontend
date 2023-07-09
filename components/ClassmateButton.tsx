import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';

type ClassmateButtonProps = {
  variant?: 'contained' | 'outlined' | "text";
  children: ReactNode;
  styles?: string;
  size: 'small' | 'large' | 'small-full' | 'large-full';
  callback: () => void;
  type: 'button' | 'submit' | 'reset';
};

const sizeStylesMap = {
  small: 'w-28 h-9 text-sm',
  large: 'w-40 h-11 text-base',
  'small-full': 'w-full h-9 text-sm',
  'large-full': 'w-full h-11 text-base',
};

const variantStylesMap = {
  contained: 'font-classmate-bold whitespace-nowrap rounded-md antialiased shadow-none',
  outlined: 'font-classmate-bold whitespace-nowrap rounded-md antialiased hover:bg-transparent',
  text: 'hover:bg-transparent p-0 min-w-fit',
};

const ClassmateButton: FC<ClassmateButtonProps> = ({
  variant = "text",
  children,
  styles,
  size,
  callback,
  type = "button",
}) => {
  const sizeStyles = sizeStylesMap[size] || '';
  const variantStyles = variantStylesMap[variant] || '';

  return (
    <Button
      type={type}
      onClick={callback}
      className={`${variantStyles} ${sizeStyles} ${styles} capitalize`}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default ClassmateButton;
