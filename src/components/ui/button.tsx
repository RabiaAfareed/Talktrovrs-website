import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    let variantClasses = ""
    let sizeClasses = ""

    // Set variant classes
    switch (variant) {
      case "outline":
        variantClasses = "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
        break
      case "ghost":
        variantClasses = "bg-transparent text-gray-700 hover:bg-gray-100"
        break
      default:
        variantClasses = "bg-blue-600 text-white hover:bg-blue-700"
        break
    }

    // Set size classes
    switch (size) {
      case "icon":
        sizeClasses = "h-10 w-10 p-0"
        break
      default:
        sizeClasses = "h-10 px-4 py-2"
        break
    }

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
