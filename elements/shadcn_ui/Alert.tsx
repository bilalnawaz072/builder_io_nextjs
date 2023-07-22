import { AlertCircle, FileWarning, Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

interface AlertProps{
    title: string;
    description: string;
    className: string;
    variant: "default" | "destructive" | null | undefined;
  }

export default function AlertShadCN(props: AlertProps) {
    const {title, description, className, variant} = props
  return (
    <Alert variant={variant} className={className} >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}
