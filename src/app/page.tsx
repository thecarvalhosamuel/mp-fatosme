'use client'
import { FaqSection } from '@/components/common/faq'
import { WaveTop } from '@/components/common/wave'
import { Hero } from '@/components/hero'
import { PsycologistSection } from '@/components/psycologistSection'
import { WhoAmI } from '@/components/whoAmI'
import { useEffect } from 'react'

export default function Home() {
  function ScrollToHashWithOffset({ offset = 100 }: { offset?: number }) {
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

  return (
    <div className='my-2 flex flex-col'>
      <Hero />
      <ScrollToHashWithOffset />
      <WhoAmI />
      <PsycologistSection
        title='O que é a Psicologia Analítica?'
        content={`A Psicologia Analítica, originada a partir das ideias do psiquiatra suíço Carl Gustav Jung, traz conceitos que influenciam toda a cultura ocidental, tais como arquétipos, inconsciente coletivo e processo de individuação.
        A formação filosófica de Jung, o interesse pelas diversas religiões, assim como o estudo de mitologia, antropologia e alquimia foram fundamentais para a construção dos principais conceitos da Psicologia Analítica.
        Entender o funcionamento dessa estrutura possibilita que possamos ter mais escolhas e, quem sabe, escolher novos caminhos em futuras oportunidades. É isso o que a análise proporciona: entender melhor a estrutura, o funcionamento dos processos inconscientes e escolher o que fazer com isso.
        O que se pode esperar de um analista é uma escuta atenciosa e dialética, sem julgamentos morais sob aquilo que se escuta. O papel do analista é escutar o inconsciente e ajudar a pessoa a escutá-lo também.`}
      />
      <div className='relative flex flex-col gap-4 rounded-lg bg-[#F4EDE8] p-4 shadow-md'>
        <WaveTop colorFill='#A96058' />
        <FaqSection
          faqs={[
            {
              question: 'Como funcionam as sessões?',
              answer:
                'Durante a sessão, você é convidado a associar livremente, ou seja, falar o que lhe vier à cabeça. Da forma mais livre possível, sem se preocupar com o sentido, ordem cronológica, ou qualquer outra coisa. As sessões duram, em média, 50 minutos e são feitas por videochamada ou presencial com data e hora marcada — geralmente com frequência semanal.',
            },
            {
              question: 'Análise online funciona?',
              answer:
                'O que se analisa em um processo analítico é o discurso produzido pela pessoa, não importando tanto suas expressões faciais, gestos ou jeito. Sendo assim, é completamente possível fazer análise de forma não presencial, sendo essa uma escolha de preferência pessoal.',
            },
            {
              question: 'Psicologia Analítica trata depressão? E ansiedade?',
              answer: `Sim, a Psicologia Analítica pode ser uma forma de tratamento para qualquer sofrimento psíquico. Porém, diferente do modelo médico, a psicologia Analítica não tem como intuito principal identificar um sintoma e/ou um diagnóstico e eliminá-lo. 
              O que se faz na análise é pensar o diagnóstico como um todo, entender os sintomas, sua história, sua função e, a partir da singularidade de cada pessoa, aprender a lidar com eles da melhor forma.É a partir da relação da pessoa com seu sintoma e da forma como ela narra sobre seu sofrimento que se propõe a pensar formas para lidar com eles.`,
            },
            {
              question: 'Atende por convênio?',
              answer:
                'Não, eu não trabalho com nenhum convênio. No entanto, caso o seu convênio faça reembolso, posso fornecer recibos das sessões. ',
            },
            {
              question: 'Como faço para agendar?',
              answer:
                `<a class="text-primary font-bold hover:underline" href='#agendar'>Clique aqui</a> para marcar nossa conversa inicial. Ela serve para nos conhecermos, você tirar suas dúvidas e entender se é mesmo o que procura, além de definirmos os valores, horários e a frequência. Caso queira prosseguir, agendamos a primeira sessão.`,
            },
          ]}
        />
      </div>
    </div>
  )
}
