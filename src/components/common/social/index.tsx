import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { SocialProps } from '@/interfaces/components/social'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Social({
  name,
  color = '#fff',
  size = 24,
  link,
  tooltipText,
  children,
}: SocialProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          target='_blank'
          className='flex items-center justify-center transition-colors duration-300 hover:cursor-pointer gap-1 '
          aria-label={tooltipText}
        >
          <FontAwesomeIcon
            icon={name}
            className='hover:scale-150 transition-transform duration-300 ease-in-out'
            style={{ width: size, height: size, color: `${color}` }}
          />
          {children}
        </Link>
      </TooltipTrigger>
      {tooltipText && (
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      )}
    </Tooltip>
  )
}
