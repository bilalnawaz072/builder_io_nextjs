import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface AccordionProps{
    trigger: string;
    content: string;
  }
  
  export default function AccordionShadCN(props: AccordionProps) {
    const { trigger, content } = props

    return (
      <Accordion type="single"  collapsible >
        <AccordionItem value="item-1" >
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
