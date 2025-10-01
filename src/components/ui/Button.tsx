// src/components/ui/Button.tsx
'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background ' +
    'disabled:opacity-60 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-gray-400 text-gray-600',
        primary: 'bg-brand-600 hover:bg-brand-700 text-white',
        outline: 'border-2 border-gray-300 hover:bg-gray-50',
        ghost: 'text-gray-700 hover:bg-gray-100',
        azul: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        purple: 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md ' +
          'focus-visible:ring-purple-500',
      },
      size: {
        sm: 'h-8 px-3 py-2 text-sm rounded-lg',
        default: 'px-6 py-3 text-base',
        lg: 'h-12 px-8 py-4 text-base rounded-2xl',
        icon: 'size-9 p-0',
      },
      fullWidth: {
        true: 'w-full',
        false: null,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref as any}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
