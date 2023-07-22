import * as React from "react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Icons } from "@radix-ui/react-icons"

interface ListItemProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

function ListItem({ href, title, children }: ListItemProps) {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href={href}
        >
          <Icons.logo className="h-6 w-6" />
          <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
          <p className="text-sm leading-tight text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

interface NavigationMenuItemProps {
  introductionHref: string;
  introductionTitle: string;
  installationHref: string;
  installationTitle: string;
  typographyHref: string;
  typographyTitle: string;
}

export default function NavigationMenuItemShadCN(
  props: NavigationMenuItemProps
) {
  const {
    introductionHref,
    introductionTitle,
    installationHref,
    installationTitle,
    typographyHref,
    typographyTitle,
  } = props;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <ListItem href="/" title="shadcn/ui">
            Beautifully designed components built with Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href={introductionHref} title={introductionTitle}>
            Re-usable components built using Radix UI and Tailwind CSS.
          </ListItem>
          <ListItem href={installationHref} title={installationTitle}>
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href={typographyHref} title={typographyTitle}>
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
