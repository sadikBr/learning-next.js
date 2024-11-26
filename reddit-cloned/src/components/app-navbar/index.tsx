"use client";

import { usePathname } from "next/navigation";
import React from "react";

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconBrandReddit, IconSearch } from "@tabler/icons-react";

import { ThemeSwitcher } from "./theme-switcher";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const path = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center gap-4 font-bold text-inherit"
          >
            <IconBrandReddit />
            Reddit Clone
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {path !== "/search" && (
            <Link className="w-full" href="/search" size="sm">
              <Button className="flex items-center gap-6">
                <IconSearch />
                Search
              </Button>
            </Link>
          )}
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <ThemeSwitcher showLabel />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
