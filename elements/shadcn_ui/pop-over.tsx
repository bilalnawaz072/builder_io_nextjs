import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopoverDemoProps {
  content: string;
}

export default function PopoverDemoShadCN(props: PopoverDemoProps) {
  const { content } = props;

  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}
