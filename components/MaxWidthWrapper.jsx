import { twMerge } from 'tailwind-merge'

const MaxWidthWrapper = ({
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        'mx-auto w-full md:max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
