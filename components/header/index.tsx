import React from "react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between">
      <h1 className="text-center leading-[64px]">Header</h1>
      <Button size="sm" variant="ghost">
        Login
      </Button>
    </div>
  );
};
