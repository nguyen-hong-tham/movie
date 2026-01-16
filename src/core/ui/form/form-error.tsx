// export const FormError = ({ error }: { error: string }) => {
//   return (
//     <p className='text-destructive absolute top-full left-0 pt-[1px] text-[0.8125rem] leading-[16px] font-normal whitespace-nowrap'>
//       {error}
//     </p>
//   )
// }
export const FormError = ({ error }: { error?: string }) => {
    if (!error) return null
    return (
        <p className="text-destructive absolute top-full left-0 pt-px text-[0.8125rem] leading-4 font-normal whitespace-nowrap">
            {error}
        </p>
    )
}
