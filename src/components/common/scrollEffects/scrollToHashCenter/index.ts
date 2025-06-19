'use client'
import { useEffect } from "react"

export function ScrollToHashCenter() {
  useEffect(() => {
    function scrollToHash() {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    }
    window.addEventListener('hashchange', scrollToHash)
    // Executa ao carregar a página
    scrollToHash()
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])
  return null
}