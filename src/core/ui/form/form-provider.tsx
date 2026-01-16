import { FormProvider } from 'react-hook-form'

import { cn } from '@/lib/utils'

import type { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormProps<T extends FieldValues = FieldValues> = {
  form: UseFormReturn<T>
  children?: React.ReactNode
  onSubmit?: SubmitHandler<T>
  onError?: SubmitErrorHandler<T>
  className?: string
  id?: string
  enterToSubmit?: boolean
}

export const Form = <T extends FieldValues = FieldValues>({
  children,
  form,
  className,
  onSubmit,
  onError,
  id,
  enterToSubmit = true
}: FormProps<T>) => {
  const { handleSubmit } = form

  return (
    <FormProvider<T> {...form}>
      <form
        id={id}
        onSubmit={handleSubmit(
          (v) => {
            onSubmit?.(v)
          },
          (errors) => {
            onError?.(errors)
          }
        )}
        className={cn(className)}
        noValidate
        onKeyDown={(ev) => {
          if (ev.key === 'Enter' && !enterToSubmit) {
            ev.preventDefault()
          }
        }}
      >
        {children}
      </form>
    </FormProvider>
  )
}
