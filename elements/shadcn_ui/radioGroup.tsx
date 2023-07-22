import * as React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RadioGroupDemoProps {
  options: { value: string; label: string }[];
  defaultValue: string;
}

export default function RadioGroupDemoShadCN(props: RadioGroupDemoProps) {
  const { options, defaultValue } = props;

  return (
    <RadioGroup defaultValue={defaultValue}>
      {options?.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={`radio_${option.value}`} />
          <Label htmlFor={`radio_${option.value}`}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
