import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonDemoProps {
  circleWidth?: string;
  circleHeight?: string;
  lineWidth?: string;
  lineHeight?: string;
}

export default function SkeletonDemo(props: SkeletonDemoProps) {
  const { circleWidth, circleHeight, lineWidth, lineHeight } = props;

  return (
    <div className="flex items-center space-x-4">
      <Skeleton style={{ width: circleWidth, height: circleHeight }} className={'rounded-full'} />
      <div className="space-y-2">
        <Skeleton style={{ width: lineWidth, height: lineHeight }} />
        <Skeleton style={{ width: lineWidth, height: lineHeight }} />
      </div>
    </div>
  );
}