import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id='faq' className='py-16'>
      <h2 className='mb-10 text-center text-md font-medium'>
        Perguntas frequentes
      </h2>
      <div className='block md:hidden px-4'>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className='text-left text-lg font-semibold text-black hover:cursor-pointer'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={faq.color + ' rounded-md p-4'}>
                <div
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop grid */}
      <div className='hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3'>
        {faqs.map((faq, index) => (
          <div key={index} className={`rounded-xl p-6 shadow-sm border-2 bg-white ${faq.color} max-w-96 hover:shadow-xl transition-shadow duration-300`}>
            <h3 className='mb-2 font-semibold text-black'>{faq.question}</h3>
            <p className='text-normal'
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
