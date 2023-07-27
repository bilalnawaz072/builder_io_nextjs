import { ReactNode} from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Builder, withChildren } from '@builder.io/react'; 



interface CardFormProps {
  title: string;
  description: string;
  namePlaceholder: string;
  frameworkPlaceholder: string;
  cancelBtnText: string;
  deployBtnText: string;
  children?: ReactNode;
}

function ChildrenTest(props: CardFormProps) {
  const {
    title,
    description,
    namePlaceholder,
    frameworkPlaceholder,
    cancelBtnText,
    deployBtnText,
    children
  } = props;

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children || ""}
      </CardContent>
    </Card>
  );
}

const withChildTest = withChildren(ChildrenTest)

export default withChildTest