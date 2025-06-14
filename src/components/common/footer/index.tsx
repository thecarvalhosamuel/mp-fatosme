import Link from 'next/link'
import { Social } from '../social'
import Image from 'next/image'

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
    title: 'Psicóloga Maria Paula Fatosme',
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
    <section className='px-4 py-12'>
      <div className='container'>
        <footer>
          <div className='flex flex-col md:flex-row justify-between gap-8'>
            <div className='col-span-2 mb-8 lg:mb-0'>
              <div className='flex items-center gap-2 lg:justify-start'>
                <Image
                  src='/images/logo.webp'
                  alt='Logo Psi Maria Paula'
                  width={100}
                  height={96}
                  className='h-24 w-auto'
                />
                <p className='text-xl font-semibold'>{logo.title}</p>
              </div>
              <p className='mt-4 font-bold'>{tagline}</p>
              <div className='flex gap-4'>
                <Social
                  name='fa-brands fa-instagram'
                  link='#'
                  tooltipText='Visite meu Instagram'
                />
                <Social
                  name='fa-brands fa-linkedin'
                  link='#'
                  tooltipText='Visite meu Linkedin'
                />
              </div>
            </div>
            <div className='col-span-4 grid grid-cols-2 gap-8 lg:col-span-4'>
              {menuItems.map((section, index) => (
                <ul key={index} className='text-muted-foreground space-y-4'>
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className='hover:text-primary font-medium'
                    >
                      <Link
                        href={link.url}
                        className='hover:underline'
                        rel='noopener noreferrer'
                        title={link.text}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className='items-center text-muted-foreground mt-6 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center'>
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
      </div>
    </section>
  )
}

export { Footer2 }
