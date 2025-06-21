import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export function Icon(props: FontAwesomeIconProps) {
  return <FontAwesomeIcon {...props} style={{ width: 30, height: 30 }} />;
}