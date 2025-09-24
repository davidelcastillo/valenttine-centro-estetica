import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import React from 'react'


const button = cva(
'inline-flex items-center justify-center w-full px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg',
{
variants: {
variant: {
default: 'bg-gray-400 text-gray-600',
primary: 'bg-brand-600 hover:bg-brand-700 text-white',
outline: 'border-2 border-gray-300 hover:bg-gray-50',
ghost: 'text-gray-700 hover:bg-gray-100',
azul: 'rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-xl',
},
},
defaultVariants: { variant: 'default' },
}
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => (
<button ref={ref} className={cn(button({ variant, className }))} {...props} />
))
Button.displayName = 'Button'