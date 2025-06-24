'use client'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip'
import { sendWhatsAppMessage } from '@/utils/whatsapp'

export function ScheduleButton() {
  const handleClick = () => {
    sendWhatsAppMessage()
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div id='agendar' className='flex items-center justify-center'>
          <span
            onClick={handleClick}
            className='bg-primary text-xl hover:bg-accent-hover rounded-lg px-6 py-2 text-white transition-colors cursor-pointer'
          >
            Agendar consulta
          </span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Vamos bater um papo</p>
      </TooltipContent>
    </Tooltip>
  )
}
