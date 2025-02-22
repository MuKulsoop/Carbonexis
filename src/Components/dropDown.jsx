"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropDown(props) {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{props.topic}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Option 1</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Option 2</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Option 3</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
