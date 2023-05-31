import Image from 'next/image'
import { ReactNode } from 'react'
import iconPlus from '../../public/icon_plus.png'
import iconClose from '../../public/close.png'
import iconDisabled from '../../public/icon_disabled.png'

interface ContentBoxProps {
  children?: ReactNode
  onPlusClick?: () => void
  onCloseClick?: () => void
  disabled?: boolean
}

export default function ContentBox({
  children,
  disabled = false,
  onPlusClick,
  onCloseClick,
}: ContentBoxProps) {
  const disabledClass = disabled ? 'brightness-75 ' : 'hover:brightness-125 '
  return (
    <div className="relative inline-flex">
      {children && (
        <button
          onClick={onCloseClick}
          className="absolute bottom-10 left-10 w-5 hover:brightness-125 z-10"
        >
          <Image src={iconClose} alt="close" />
        </button>
      )}
      <button
        disabled={disabled}
        onClick={onPlusClick}
        className={
          disabledClass +
          'w-[50px] h-[50px] rounded-md border-2 border-yellow-600 bg-slate-500 overflow-hidden '
        }
      >
        <>
          {children || (
            <Image
              src={disabled ? iconDisabled : iconPlus}
              alt={disabled ? 'disabled' : 'add'}
              width={20}
              className="m-auto"
            />
          )}
        </>
      </button>
    </div>
  )
}
