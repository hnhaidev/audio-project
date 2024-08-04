import React from "react";
import { Button } from "../ui/button";

export const Menu = () => {
  return (
    <div className="flex items-center h-10 gap-x-6">
      <Button variant="link">Đang phát</Button>
      <Button variant="link">Tìm kiếm</Button>
    </div>
  );
};
