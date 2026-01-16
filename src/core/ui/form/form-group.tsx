import { cn } from '@/lib/utils'

export interface FormGroupProps {
  children?: React.ReactNode
  className?: string
}

export function FormGroup({ children, className }: FormGroupProps) {
  return (
    <div
      className={cn(
        'form-group flex flex-wrap items-start gap-5 lg:flex-nowrap xl:flex-nowrap [&>*]:w-full lg:[&>*]:w-1/2',
        className
      )}
    >
      {children}
    </div>
  )
}
