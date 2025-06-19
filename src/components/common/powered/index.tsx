import Link from 'next/link'
import { Social } from '../social'

export function Powered() {
  return (
    <footer className='text-muted-foreground w-full border-t border-gray-200 py-4 text-center text-sm hover:cursor-pointer'>
      Desenvolvido por
      <Link
        href='https://github.com/thecarvalhosamuel'
        target='_blank'
        className='hover:text-gray-700 hover:underline'
      >
        <i className='fa-brands fa-github text-foreground mr-1 ml-1 text-xl'></i>
        <span className='text-foreground font-semibold'>Samuel Carvalho</span>
      </Link>
    </footer>
  )
}
