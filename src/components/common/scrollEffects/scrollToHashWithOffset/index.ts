'use client'
import { useEffect } from "react"

export function ScrollToHashWithOffset({ offset = 100 }: { offset?: number }) {
  useEffect(() => {
    function scrollToHash() {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }
    }

    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href')
        if (href && href.startsWith('#')) {
          setTimeout(scrollToHash, 0)
        }
      }
    }

    window.addEventListener('hashchange', scrollToHash)
    document.addEventListener('click', handleAnchorClick)
    // Executa ao carregar a página
    scrollToHash()
    return () => {
      window.removeEventListener('hashchange', scrollToHash)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [offset])
  return null
}