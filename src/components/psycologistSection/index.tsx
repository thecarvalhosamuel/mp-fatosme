import React from 'react'

interface PsycologistSectionProps {
  title: string
  content: string
}

export function PsycologistSection({
  title,
  content,
}: PsycologistSectionProps) {
  const paragraphs = content.split('\n')
  const length = paragraphs.length
  const middle = Math.ceil(length / 2)
  return (
    <section id='como-funciona'
      className='relative flex flex-row w-full h-full lg:max-h-[600px] bg-[#A96058] text-white'
    >
      <div className='relative z-20 container mx-8 flex flex-col lg:flex-row gap-12 px-6 py-32'>
        <div className='flex flex-col space-y-4 w-full lg:w-1/3'>
          <h2 className='text-3xl text-[#EFE6DF] md:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='space-y-4 text-[#EFE6DF] w-full lg:w-1/2'>
          {paragraphs.slice(0, middle).map((paragraph, index) => (
            <p key={index} className='text-xl'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='space-y-4 text-[#EFE6DF] w-full lg:w-1/2'>
          {paragraphs.slice(middle, length).map((paragraph, index) => (
            <p key={index} className='text-xl'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
