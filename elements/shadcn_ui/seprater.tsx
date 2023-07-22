import * as React from "react";
import { Separator } from "@/components/ui/separator";

interface SeparatorDemoProps {
  className?: string;
  orientation?: "horizontal" | "vertical";

}

export default function SeparatorDemoShadCN(props: SeparatorDemoProps) {
  const { className, orientation } = props;

  return (
    <div>

    <Separator className={className} orientation={orientation} />

  </div>
  )
}
