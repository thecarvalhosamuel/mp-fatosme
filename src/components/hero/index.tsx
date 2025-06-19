import { Icon } from "@iconify/react";
import Image from "next/image";

export function Hero() {
  return (
    <div
      className="relative bg-[#A96058] w-full h-[300px] lg:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center p-8 mb-2 rounded-lg shadow-lg gap-12"
    > 
      <Image
        src='/images/shrink.png'
        alt='Maria Paula Fatosme'
        width={500}
        height={400}
        className='absolute hidden max-w-[500px] max-h-[250px] object-contain scale-150 md:block'
      />
      <h1 className="text-white text-4xl font-bold">Oi, como você está?</h1>
      <div className="bg-[#F4EDE8] text-base px-4 py-2 rounded-lg shadow-md hover:cursor-pointer hover:bg-[#E8DCD9] transition-colors duration-300 z-10">
        <a href='#agendar' className='no-underline flex gap-3 items-center justify-center'>
          <span>Atendimento online e presencial</span>
          <Icon icon="solar:map-arrow-down-broken" width="16" height="16" />
        </a>
      </div>
    </div>
  )
}