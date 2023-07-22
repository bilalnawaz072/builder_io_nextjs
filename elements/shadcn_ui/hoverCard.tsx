import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface HoverCardDemoProps {
  username: string;
  avatarSrc: string;
  avatarFallback: string;
  bio: string;
  joinedDate: string;
}

export default function HoverCardDemoShadCN(props: HoverCardDemoProps) {
  const { username, avatarSrc, avatarFallback, bio, joinedDate } = props;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@{username}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@{username}</h4>
            <p className="text-sm">{bio}</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                {joinedDate}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
