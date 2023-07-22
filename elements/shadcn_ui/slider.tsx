import * as React from "react"
import { Slider } from "@/components/ui/slider";

interface SliderDemoProps {
  max: number;
  step: number;
}

export default function SliderDemoShadCN(props: SliderDemoProps) {
  const {  max, step } = props;

  return <Slider defaultValue={[30]} max={max} step={step} />;
}
