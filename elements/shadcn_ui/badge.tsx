import { Badge } from "@/components/ui/badge"

interface BadgeProps {
  content: string;
  variant?: "default" | "destructive" | "outline" |  "secondary" 
}

export default function BadgeDemoShadCN(props: BadgeProps) {
  const { content, variant } = props;

  return <Badge variant={variant}>{content}</Badge>;
}
