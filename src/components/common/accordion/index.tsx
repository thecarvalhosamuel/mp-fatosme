import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="container py-16">
      <h2 className="text-center text-sm  font-medium mb-10">
        Perguntas frequentes
      </h2>

      {/* Mobile accordion */}
      <div className="block md:hidden">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-black font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className={faq.color + " p-4 rounded-md"}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-sm ${faq.color}`}
          >
            <h3 className="font-semibold mb-2 text-black">{faq.question}</h3>
            <p className="text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
