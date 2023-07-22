import { ScrollArea } from "@/components/ui/scroll-area";

interface ScrollAreaShadCNProps {
  height: string;
  width: string;
  text: string;
  resize: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';

}

const ScrollAreaShadCN: React.FC<ScrollAreaShadCNProps> = ({ height, width ,text ,resize}) => (
  <ScrollArea  style={{ height, width,resize }} className="rounded-md border p-4">
   {text}
  </ScrollArea>
);

export default ScrollAreaShadCN;
