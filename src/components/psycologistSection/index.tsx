import React from "react";
import { WaveBottom, WaveTop } from "../common/wave";

interface PsycologistSectionProps {
  title: string;
  content: string;
}

export function PsycologistSection({ title, content }: PsycologistSectionProps) {
  return (
    <section className="relative bg-[#636033] text-white w-full overflow-hidden">
      {/* Top wave */}
      <WaveTop />

      {/* Content */}
      <div className="relative z-20 container mx-auto flex flex-col md:flex-row px-6 py-32 gap-12">
        <div className="md:w-1/3 items-center flex flex-col justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#EFE6DF]">
            {title}
          </h2>
        </div>
        <div className="md:w-2/3 text-[#EFE6DF] space-y-4">
          {/* Coloque o conteúdo textual aqui */}
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <WaveBottom />

    </section>
  );
}
