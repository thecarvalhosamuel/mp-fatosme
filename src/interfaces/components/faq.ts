interface FaqQuestionProps {
  question: string;
  answer: string;
  color?: string;
}

interface FaqSectionProps {
  faqs: FaqQuestionProps[];
}