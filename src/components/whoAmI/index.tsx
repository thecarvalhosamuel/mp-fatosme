import Image from 'next/image'
import { ScheduleButton } from '../common/buttons'
import { Quote } from '../quote'
import { WaveBottom } from '../common/wave'

export function WhoAmI() {
  return (
    <section
      id='sobre-mim'
      className='relative flex w-full flex-col sm:flex-col md:row-col items-center justify-center gap-4 rounded-xl bg-[#EFE6DF] p-4 shadow-lg md:p-8'
    >
      <div className='flex w-full flex-col items-center justify-center gap-4 md:flex-row'>
        <div className='relative flex aspect-[3/4] w-[30%] items-center justify-center'>
          <Image
            src='/images/maria.jpeg'
            alt='Foto de perfil'
            width={300}
            height={300}
            className='rounded-full object-cover max-w-[300px] max-h-[300px]'
          />
        </div>
        <div className='flex w-full flex-col justify-center p-6 md:w-[70%]'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col'>
              <h3 className='text-priamry'>Prazer,</h3>
              <h1 className=''>Maria Paula Fatosme</h1>
            </div>

            <div className='flex flex-col gap-1 pb-4 font-medium'>
              <p className='text-accent text-[16px]'>
                Atendimento on-line e presencial para adultos
              </p>
              <p className='text-accent text-[16px]'>CRP 06/221859</p>
            </div>
          </div>
          <div className='flex flex-wrap gap-2 text-justify'>
            <p className='text-xl'>
              Sou mulher, mineira, de ascendência francesa, filha de um artista
              plástico e de uma mineira autêntica que desenvolvia sua
              criatividade na cozinha. Sou psicóloga e atuo como analista
              junguiana.
            </p>
            <p className='text-xl'>
              Escolhi a psicologia analítica como declaração das minhas raízes,
              por meio da livre expressão da fala, da arte, da cultura e do
              afeto. Para mim fala é cura. Arte é uma das expressões do
              inconsciente. Afeto é o reconhecimento dos nossos sentimentos,
              daquilo que nos atravessa ao longo da vida.
            </p>
            <p className='text-xl'>
              Acredito numa análise viva que acompanhe o tempo e local em que
              está inserida. Por isso, entendo que a psicologia analítica
              sozinha não basta, é preciso estar atento às questões sociais
              produzidas e a forma como elas afetam cada sujeito. E é isso o que
              eu trabalho para que aconteça na minha clínica:{' '}
              <strong>uma análise possível.</strong>
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-10 mb-10'>
        <ScheduleButton />
        <Quote
          text='Só aquilo que somos realmente tem o poder de nos curar. '
          author='Carl Jung'
        />
      </div>
      <WaveBottom colorFill='#A96058' />
    </section>
  )
}
