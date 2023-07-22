import * as React from "react";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface MenubarDemoProps {
  menu1: string[];
  menu2: string[];
  menu3: string[];
  menu4: string[];
  alwaysShowBookmarks: boolean;
  alwaysShowFullURLs: boolean;
}

export default function MenubarDemoShadCN(props: MenubarDemoProps) {
  const {
    menu1,
    menu2,
    menu3,
    menu4,
    alwaysShowBookmarks,
    alwaysShowFullURLs,
  } = props;

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          {menu1?.map((field) => (
            <MenubarItem key={field}>
              {field.menu1} <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          {menu2?.map((field) => (
            <MenubarItem key={field}>
              {field.menu2} <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={alwaysShowFullURLs}>
            Always Show Full URLs
          </MenubarCheckboxItem>
          {menu3?.map((field) => (
            <MenubarItem key={field} inset>
              {field.menu3}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value={menu4?.[0]}>
            {menu4?.map((profile) => (
              <MenubarRadioItem key={profile} value={profile}>
                {profile.menu4}
              </MenubarRadioItem>
            ))}
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
