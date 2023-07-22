import * as React from "react";
import { Textarea } from "@/components/ui/textarea";

interface TextareaDemoProps {
  placeholder?: string;
  autoComplete?: string;
  cols?: number;
  dirName?: string;
  disabled?: boolean;
  form?: string;
  maxLength?: number;
  minLength?: number;
  name?: string;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  value?: string | ReadonlyArray<string> | number;
  wrap?: string;
}

export default function TextareaDemoShadCN(props: TextareaDemoProps) {
  const { placeholder, ...textareaProps } = props;

  return <Textarea placeholder={placeholder} {...textareaProps} />;
}
