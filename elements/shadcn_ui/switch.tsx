import * as React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SwitchDemoProps {
  id: string;
  label: string;
  isLabel:boolean;
}

export default function SwitchDemoShadCN(props: SwitchDemoProps) {
  const { id, label , isLabel=true } = props;

  return (
    <div className="flex items-center space-x-2">
      <Switch id={id} />
     {isLabel && <Label htmlFor={id}>{label}</Label>}
    </div>
  );
}
