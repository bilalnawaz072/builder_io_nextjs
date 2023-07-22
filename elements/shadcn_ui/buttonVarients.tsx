import { Button } from "@/components/ui/button"
import { EnvelopeOpenIcon  } from "@radix-ui/react-icons";


interface ButtonSecondaryProps {
  text: string;
  variant: 'default' | 'destructive'| 'link' | 'outline' | 'secondary' | 'ghost';
  showIcon?: boolean;
  link?: string;
}

export default function ButtonSecondaryShadCN2(props: ButtonSecondaryProps) {
  const { text , variant ,showIcon=false ,link } = props;

  const linkUrl = link || "https://www.google.com";

  if (variant === "link") {
    return (
      <a href={linkUrl}>
        <Button variant="link">
          {showIcon && <EnvelopeOpenIcon className="h-4 w-4 mr-2" />}
          {text}
        </Button>
      </a>
    );
  }

  return (
  <Button variant={variant} >
    {showIcon && <EnvelopeOpenIcon  className="h-4 w-4 mr-2" />}
    {text}
    </Button>
  );
}
