import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface SocialProps {
  name: IconDefinition
  color?: string
  size?: number
  link: string
  tooltipText?: string
  children?: React.ReactNode
}

export type { SocialProps }
