"use client"

import { CookieIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CookieConsentProps {
  variant?: "default" | "small"
  demo?: boolean
  onAcceptCallback?: () => void
  onDeclineCallback?: () => void
}

export default function CookieConsent({
  variant = "small",
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hide, setHide] = useState(false)

  const accept = () => {
    setIsOpen(false)
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
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
      if (document.cookie.includes("cookieConsent=true") && !demo) {
        setIsOpen(false)
        setTimeout(() => setHide(true), 700)
      }
    } catch (e) {
      console.error("Erro ao verificar cookies", e)
    }
  }, [demo])

  const baseClasses = cn(
    "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md transition-all duration-700",
    !isOpen ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
    hide && "hidden"
  )

  return (
    <div className={baseClasses}>
      <div className="m-3 rounded-md border border-border bg-background dark:bg-card shadow-lg overflow-hidden">
        {variant === "default" ? (
          <div className="grid gap-0">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h1 className="text-lg font-medium">Nós usamos cookies</h1>
              <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <div className="p-4">
              <p className="text-sm text-start">
                Nós usamos cookies para garantir que você tenha a melhor experiência em nosso site. Para mais informações sobre como usamos cookies, consulte nossa política de cookies.
                <br />
                <br />
                <span className="text-xs">
                  Clicando em <span className="font-medium opacity-80">"Aceitar"</span>, você concorda com o uso dos cookies.
                </span>
                <br />
                <a href="#" className="text-xs underline">Saiba mais</a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 p-4 pt-0 border-border">
              <Button onClick={accept} className="sm:w-1/2 w-full hover:cursor-pointer">Aceitar</Button>
              <Button onClick={decline} className="sm:w-1/2 w-full hover:cursor-pointer" variant="secondary">Rejeitar</Button>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium">Nós usamos cookies</h1>
              <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <p className="text-sm text-muted-foreground">
              Nós usamos cookies para garantir que você tenha a melhor experiência em nosso site. Para mais informações, consulte nossa política.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button onClick={accept} className="sm:w-1/2 w-full h-9 rounded-full hover: cursor-pointer">Aceitar</Button>
              <Button onClick={decline} className="sm:w-1/2 w-full h-9 rounded-full hover: cursor-pointer" variant="outline">Rejeitar</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
