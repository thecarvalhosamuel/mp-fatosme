import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Social } from '../social'


export function Powered() {
  return (
    <footer className='text-muted-foreground w-full border-t border-gray-200 py-4 text-center text-sm'>
      <div className="flex items-end justify-center hover:text-gray-700 hover:underline gap-1">
        <span>Desenvolvido por</span>
        <Social
          size={24}
          name={faGithub}
          link='https://github.com/thecarvalhosamuel'
          color='#000'
        >
          <span className='text-foreground font-semibold'>Samuel Carvalho</span>
        </Social>
      </div>
    </footer>
  )
}
