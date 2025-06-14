'use client'

import { CookieIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface CookieConsentProps {
  variant?: 'default' | 'small'
  demo?: boolean
  onAcceptCallback?: () => void
  onDeclineCallback?: () => void
}

export default function CookieConsent({
  variant = 'small',
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState(false)

  const accept = () => {
    setIsOpen(false)
    document.cookie =
      'cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
    setTimeout(() => setHide(true), 700)
    onAcceptCallback()
  }

  const decline = () => {
    setIsOpen(false)
    setTimeout(() => setHide(true), 700)
    onDeclineCallback()
  }

  useEffect(() => {
    try {
      setIsOpen(true)
      if (document.cookie.includes('cookieConsent=true') && !demo) {
        setIsOpen(false)
        setTimeout(() => setHide(true), 700)
      }
    } catch (e) {
      console.error('Erro ao verificar cookies', e)
    }
  }, [demo])

  const baseClasses = cn(
    'fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md transition-all duration-700',
    !isOpen ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100',
    hide && 'hidden'
  )

  return (
    <div className={baseClasses}>
      <div className='border-border bg-background dark:bg-card m-3 overflow-hidden rounded-md border shadow-lg'>
        {variant === 'default' ? (
          <div className='grid gap-0'>
            <div className='border-border flex items-center justify-between border-b p-4'>
              <h1 className='text-lg font-medium'>Nós usamos cookies</h1>
              <CookieIcon className='h-[1.2rem] w-[1.2rem]' />
            </div>
            <div className='p-4'>
              <p className='text-start text-sm'>
                Nós usamos cookies para garantir que você tenha a melhor
                experiência em nosso site. Para mais informações sobre como
                usamos cookies, consulte nossa política de cookies.
                <br />
                <br />
                <span className='text-xs'>
                  Clicando em{' '}
                  <span className='font-medium opacity-80'>"Aceitar"</span>,
                  você concorda com o uso dos cookies.
                </span>
                <br />
                <a href='#' className='text-xs underline'>
                  Saiba mais
                </a>
              </p>
            </div>
            <div className='border-border flex flex-col gap-2 p-4 pt-0 sm:flex-row'>
              <Button
                onClick={accept}
                className='w-full hover:cursor-pointer sm:w-1/2'
              >
                Aceitar
              </Button>
              <Button
                onClick={decline}
                className='w-full hover:cursor-pointer sm:w-1/2'
                variant='secondary'
              >
                Rejeitar
              </Button>
            </div>
          </div>
        ) : (
          <div className='space-y-3 p-4'>
            <div className='flex items-center justify-between'>
              <h1 className='text-lg font-medium'>Nós usamos cookies</h1>
              <CookieIcon className='h-[1.2rem] w-[1.2rem]' />
            </div>
            <p className='text-muted-foreground text-sm'>
              Nós usamos cookies para garantir que você tenha a melhor
              experiência em nosso site. Para mais informações, consulte nossa
              política.
            </p>
            <div className='flex flex-col gap-2 pt-4 sm:flex-row'>
              <Button
                onClick={accept}
                className='hover: h-9 w-full cursor-pointer rounded-full sm:w-1/2'
              >
                Aceitar
              </Button>
              <Button
                onClick={decline}
                className='hover: h-9 w-full cursor-pointer rounded-full sm:w-1/2'
                variant='outline'
              >
                Rejeitar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
