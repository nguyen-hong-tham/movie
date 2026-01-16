import * as React from 'react'

import { cn } from '@/lib/utils'
import { FormError } from './form/form-error'

type InputProps = React.ComponentProps<'input'> & {
    // news props
    error?: string
    label?: string
    required?: boolean
}

function Input({ className, type, error, label, required, ...props }: InputProps) {
    const id = React.useId()
    return (
        <div className="w-full relative">
            <label className="font-medium block mb-1" htmlFor={id}>
                {label}
                {required && <span className="text-destructive">*</span>}
            </label>
            <input
                id={id}
                type={type}
                data-slot="input"
                className={cn(
                    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                    className
                )}
                {...props}
            />
            <FormError error={error} />
        </div>
    )
}

export { Input }
