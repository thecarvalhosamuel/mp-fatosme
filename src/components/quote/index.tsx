interface QuoteProps {
  text: string;
  author: string;
}

export function Quote({ text, author }: QuoteProps) {
  return (
    // <div className="flex flex-col p-4 max-w-lg">
    //   <p className="text-3xl text-accent font-mono mb-2">
    //     "{text}"
    //   </p>
    //   <div className="flex items-end justify-end">
    //   <span className="text-sm text-gray-500">{author}</span>
    //   </div>
    // </div>
    // <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground relative py-4 px-2">
    //   <p className="text-lg leading-relaxed">"{text}"</p>
    //   <footer className="mt-2 text-sm text-right text-foreground">– {author}</footer>
    // </blockquote>
    <div className="p-4 max-w-lg">
      <p className="text-3xl text-right italic text-gray-800 mb-2">“{text}”</p>
      <p className="text-sm text-gray-500 text-right">— {author}</p>
    </div>
  )
}