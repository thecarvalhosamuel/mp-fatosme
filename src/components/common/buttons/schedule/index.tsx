import Link from "next/link";
import { env } from "@/config/env";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

export function ScheduleButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div id="#agendar" className="flex items-center justify-center">
          <Link
            href={`http://api.whatsapp.com/send?phone=${env.WHATSAPP}&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors"
          >
            Agendar consulta
          </Link>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>Vamos bater um papo</p>
      </TooltipContent>
    </Tooltip >

  );
}