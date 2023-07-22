import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputWithButtonProps {
  label: string;
  inputPlaceholder: string;
  buttonText: string;
  showButton: boolean; // New prop for controlling button visibility
}

export default function InputWithButton(props: InputWithButtonProps) {
  const { label, inputPlaceholder, buttonText, showButton } = props;

  return (
    <div className="grid w-full max-w-sm items-center space-x-2">
      <Label htmlFor="email">{label}</Label>
      <br />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder={inputPlaceholder} />
        {showButton && <Button type="submit">{buttonText}</Button>}
      </div>
    </div>
  )
}
