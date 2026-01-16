import React from 'react'
import { type Control, type ControllerProps, type FieldValues, type Path, type PathValue } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { cn } from '@/lib/utils'

export type FormItemProps<T extends FieldValues = FieldValues> = Omit<ControllerProps<T>, 'render' | 'control'> & {
  children: React.ReactElement
  className?: string
  label?: React.ReactNode
  required?: boolean
  control: Control<T>
  defaultValue?: PathValue<T, Path<T>>
}

export const FormItem = <T extends FieldValues = FieldValues>({
  children,
  className,
  label,
  required,
  defaultValue,
  ...rest
}: FormItemProps<T>) => {
  return (
    <div className={cn('form-item flex items-center', className)}>
      <Controller<T>
        {...rest}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                  ...field,
                  error: error?.message,
                  label,
                  required
                } as unknown as React.Attributes)
              )}
            </>
          )
        }}
      />
    </div>
  )
}
