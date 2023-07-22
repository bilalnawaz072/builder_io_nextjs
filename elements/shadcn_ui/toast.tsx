import * as React from "react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface ToastDestructiveProps {
  buttonText: string;
  toastvariant: "default" |"destructive";
   btnVariant: "default" | "destructive" | "link" | "outline" | "secondary" | "ghost" ;
  title: string;
  description: string;
  actionAltText: string;
}

export default function ToastDestructiveShadCN(props: ToastDestructiveProps) {
  const { buttonText,btnVariant, toastvariant, title, description, actionAltText } = props;
  const { toast } = useToast();

  return (
    <Button
      variant={btnVariant}
      onClick={() => {
        toast({
          variant: toastvariant,
          title: title,
          description: description,
          action: <ToastAction altText={actionAltText}>{actionAltText}</ToastAction>,
        });
      }}
    >
      {buttonText}
    </Button>
  );
}
