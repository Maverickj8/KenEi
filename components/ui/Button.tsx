// components/ui/Button.tsx
import React from 'react';
import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const baseStyles = 'px-5 py-2 rounded-md font-medium text-sm transition duration-200';

  const variantStyles = {
    default: 'bg-green-900 text-white hover:bg-green-800',
    outline: 'border border-green-900 text-green-900 hover:bg-green-50',
  };

  return (
    <button
      {...props}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
