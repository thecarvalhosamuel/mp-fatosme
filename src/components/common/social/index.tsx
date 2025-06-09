import { DynamicIcon } from "lucide-react/dynamic";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { SocialProps } from "@/interfaces/components/social";
import Link from "next/link";

export function Social({
  name,
  color = '#000',
  size = 24,
  link,
  tooltipText,
}: SocialProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={link}
          target="_blank"
          className="flex items-center justify-center w-10 h-10 hover:rounded-full hover:bg-gray-200 transition-colors duration-300"
          aria-label={tooltipText}
        >
          <i className={`${name} text-[${size ?? '3xl'}] font-[${color}] hover:scale-150`} ></i>
          {/* <i className="fa-brands fa-instagram"></i> */}
        </Link>
      </TooltipTrigger>
      {tooltipText && (
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      )}
    </Tooltip >
  )
}