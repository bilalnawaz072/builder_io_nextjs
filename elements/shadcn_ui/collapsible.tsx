import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CollapsibleDemoProps {
  title: string;
  repositories: string[];
}

export default function CollapsibleDemoShadCN(props: CollapsibleDemoProps) {
  const { title, repositories } = props;
  const [isOpen, setIsOpen] = React.useState(false);

console.log(repositories)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {repositories?.map((repository, index) => (
          <div key={index} className="rounded-md border px-4 py-3 font-mono text-sm">
            {repository.repo}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
