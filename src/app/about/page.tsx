import { WaveBottom, WaveTop } from '@/components/common/wave'

export default function AboutPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#EFE6DF]'>
      <WaveTop colorFill='#636033' />
      <h1 className='mb-4 text-4xl font-bold'>Sobre Nós</h1>
      <p className='max-w-2xl px-4 text-center text-lg'>
        Somos uma equipe dedicada a fornecer as melhores soluções para nossos
        clientes. Nossa missão é oferecer serviços de alta qualidade e
        excelência em tudo o que fazemos.
      </p>
      <WaveBottom colorFill='#636033' />
    </div>
  )
}
