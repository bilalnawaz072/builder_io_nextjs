import * as React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressDemoProps {
  initialProgress: number;
  duration: number;
  timedProgress: number;
}

export default function ProgressDemoShadCN(props: ProgressDemoProps) {
  const { initialProgress ,duration ,timedProgress } = props;
  const [progress, setProgress] = React.useState(initialProgress);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(timedProgress), duration);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
