import * as React from "react"
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"
import { Switch } from "@/components/ui/switch"
import { CardContent } from "@/components/ui/card"

interface Notification {
  title: string;
  description: string;
}

interface NotificationsProps {
  notifications: Notification[];
}

export default function NotificationsShadCN(props: NotificationsProps) {
  const { notifications } = props;

  return (
    <CardContent className="grid gap-4">
      <div className="flex items-center space-x-4 rounded-md border p-4">
        <BellIcon />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            Push Notifications
          </p>
          <p className="text-sm text-muted-foreground">
            Send notifications to device.
          </p>
        </div>
        <Switch />
      </div>
      <div>
        {notifications?.map((notification, index) => (
          <div
            key={index}
            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {notification.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  );
}
