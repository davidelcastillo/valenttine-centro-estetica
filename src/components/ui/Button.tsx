import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger"
  size?: "sm" | "md" | "lg"
  children: ReactNode
}

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const baseClasses = "font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"

  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
