import { Button } from "@/components/ui/button"

interface ButtonSecondaryProps {
  text: string;
  backgroundColor: 'string';
  color:'string';
}

export default function ButtonSecondaryShadCN(props: ButtonSecondaryProps) {
  const { text ,backgroundColor,color} = props;

  return (
  <Button style={{backgroundColor , color}}>{text}</Button>
  );
}
