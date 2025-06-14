import React from 'react'
import { WaveBottom, WaveTop } from '../common/wave'

interface PsycologistSectionProps {
  title: string
  content: string
}

export function PsycologistSection({
  title,
  content,
}: PsycologistSectionProps) {
  return (
    <section className='relative w-full overflow-hidden bg-[#636033] text-white'>
      <div className='relative z-20 container mx-auto flex flex-col gap-12 px-6 py-32 md:flex-row'>
        <div className='flex flex-col items-center justify-center space-y-4 md:w-1/3'>
          <h2 className='font-serif text-3xl text-[#EFE6DF] md:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='space-y-4 text-[#EFE6DF] md:w-2/3'>
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className='text-lg'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
