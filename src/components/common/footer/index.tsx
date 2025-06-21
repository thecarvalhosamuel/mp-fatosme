import { env } from '@/config/env'
import { Social } from '../social'
import Image from 'next/image'
import {faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

interface MenuItem {
  links: {
    text: string
    url: string
  }[]
}

interface Footer2Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  tagline?: string
  menuItems?: MenuItem[]
  copyright?: string
  bottomLinks?: {
    text: string
    url: string
  }[]
}

const Footer2 = ({
  logo = {
    src: 'https://shadcnblocks.com/images/block/block-1.svg',
    alt: 'Psicóloga Maria Paula Fatosme',
    title: 'Maria Paula Fatosme',
    url: '#',
  },
  tagline = 'Atendimento on-line e presencial para adultos',
  menuItems = [
    {
      links: [
        { text: 'Sobre mim', url: '#sobre-mim' },
        { text: 'Como funciona', url: '#como-funciona' },
        { text: 'FAQ', url: '#faq' },
        { text: 'Agendar', url: '#agendar' },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Maria Paula Fatosme.`,
}: Footer2Props) => {
  return (
    <section className='bg-[#A96058] text-white px-4 md:p-0'>
      <footer>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          <div className='col-span-2 mb-8 lg:mb-0'>
            <div className='flex items-center gap-2 lg:justify-start'>
              <Image
                src='/images/logo.webp'
                alt='Logo Psi Maria Paula'
                width={280}
                height={140}
                className='h-36 w-auto object-contain'
              />
              {/* <p className='text-xl font-semibold'>{logo.title}</p> */}
            </div>
            <p className='mt-4 font-bold'>{tagline}</p>
            <div className='flex gap-4 mt-2'>
              <Social
                name={faInstagram}
                link='https://www.instagram.com/psi.mariapaulafatosme'
                tooltipText='Visite meu Instagram'
              />
              <Social
                name={faWhatsapp}
                link={`https://api.whatsapp.com/send?phone=${env.WHATSAPP}`}
                tooltipText='Vamos conversar?'
              />
            </div>
          </div>
          <div className='col-span-4 grid grid-cols-2 gap-8 lg:col-span-4 items-end'>
            {menuItems.map((section, index) => (
              <ul key={index} className='text-muted-foreground space-y-4'>
                {section.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className='text-white hover:text-gray-300 font-medium'
                  >
                    <a
                      href={link.url}
                      className='hover:underline'
                      rel='noopener noreferrer'
                      title={link.text}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='items-center mt-6 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center text-white hover:text-gray-400'>
          <p>{copyright}</p>
          <ul className='flex gap-4'>
            <span className='right-0 max-w-xl text-xs'>
              Este site não oferece atendimento imediato a pessoas em crise.
              Em caso de crise, ligue para o CVV (188). Em caso de emergência,
              procure o hospital mais próximo. Havendo risco de morte, ligue
              imediatamente para o SAMU (192) ou Corpo de Bombeiro (193).
            </span>
          </ul>
        </div>
      </footer>
    </section>
  )
}

export { Footer2 }
