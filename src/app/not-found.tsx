'use client'
import Link from 'next/link'
import { WaveTop } from '@/components/common/wave'
import { sendWhatsAppMessage } from '@/utils/whatsapp'

export default function NotFound() {
  function handleReportProblem() {
    const message = "Olá! Encontrei um erro 404 no site e gostaria de reportar."
    sendWhatsAppMessage(message)
  }

  return (
    <div className='py-4 flex flex-col items-center justify-center w-full max-w-[90rem] px-4'>
      <div className='relative flex flex-col gap-8 rounded-lg bg-[#F4EDE8] p-8 shadow-md w-full max-w-[90rem]  text-center items-center justify-center'>
        <WaveTop colorFill='#A96058' />

        {/* Ícone de erro */}
        <div className='flex justify-center'>
          <div className='w-24 h-24 bg-[#A96058] rounded-full flex items-center justify-center'>
            <i className='fas fa-exclamation-triangle text-white text-3xl'></i>
          </div>
        </div>

        {/* Título */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-gray-800'>
            Página não encontrada
          </h2>
        </div>

        {/* Mensagem */}
        <div className='space-y-4'>
          <p className='text-gray-600 text-lg'>
            Desculpe, a página que você está procurando não existe ou foi removida.
          </p>
          <p className='text-gray-500'>
            Verifique se o endereço está correto ou navegue usando os links abaixo.
          </p>
        </div>

        {/* Botões de ação */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='/'
            className='bg-[#A96058] text-white px-6 py-3 rounded-lg hover:bg-[#8B4A42] transition-colors font-medium'
          >
            <i className='fas fa-home mr-2'></i>
            Voltar ao início
          </Link>

          <button
            onClick={() => window.history.back()}
            className='bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium'
          >
            <i className='fas fa-arrow-left mr-2'></i>
            Voltar
          </button>
        </div>

        {/* Informações adicionais */}
        <div className='border-t border-gray-200 pt-6 mt-6'>
          <p className='text-sm text-gray-500'>
            Se você acredita que isso é um erro, entre em contato conosco.
          </p>
          <div className='mt-4'>
            <button
              onClick={handleReportProblem}
              className='text-[#A96058] hover:underline hover:cursor-pointer font-medium'
            >
              <i className='fab fa-whatsapp mr-2'></i>
              Reportar problema
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 