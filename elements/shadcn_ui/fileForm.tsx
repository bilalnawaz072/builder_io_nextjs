import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFileProps {
  label: string;
  type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
}

export default function InputFile(props: InputFileProps) {
  const { type ,label} = props;

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input id="picture" type={type} />
    </div>
  );
}
