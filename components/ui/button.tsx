"use client"

import type React from "react"

import { forwardRef } from "react"

import { cn } from "@/lib/utils"

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    },
)
Button.displayName = "Button"

