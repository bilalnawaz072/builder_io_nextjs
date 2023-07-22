import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

interface CalendarProps {
  className: string ;
}

export default function CalendarDemoShadCN(props: CalendarProps) {
  const { className } = props;
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={className}
    />
  )
}
