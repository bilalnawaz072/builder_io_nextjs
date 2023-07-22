import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  
  interface AlertDialogueProps{
    titleBtn: string;
    alertDialogueTitle: string;
    dialogueDescription: string;
    cancelBtn:string;
    continueBtn:string;
    className: string;
    variant: "default" | "destructive" | "link" | "outline" | "secondary" | "ghost" | null | undefined
  }

  export default function AlertDialogShadeCN(props:AlertDialogueProps) {
    const {titleBtn,variant,alertDialogueTitle,dialogueDescription,cancelBtn,continueBtn,className} = props
    return (
      <AlertDialog >
        <AlertDialogTrigger asChild>
          <Button variant={variant}>{titleBtn}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>{alertDialogueTitle}</AlertDialogTitle>
            <AlertDialogDescription>
             {dialogueDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{cancelBtn}</AlertDialogCancel>
            <AlertDialogAction>{continueBtn}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  