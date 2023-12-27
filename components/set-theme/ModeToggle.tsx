"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [toggle, setToggle] = React.useState(true);

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-lg border-none dark:bg-neutral-900 bg-neutral-100"
      onClick={() => {
        setToggle(!toggle);
        {
          toggle ? setTheme("light") : setTheme("dark");
        }
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-180 duration-75 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 duration-75 dark:scale-100" />
    </Button>
  );
}
