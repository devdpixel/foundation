import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva("input", {
  variants: {
    size: {
      default: "input-md",
      sm: "input-sm",
      lg: "input-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

function Input({
  className,
  size,
  type,
  ...props
}: React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
