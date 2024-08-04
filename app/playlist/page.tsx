"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { historyList } from "@/utils/constants";
import React from "react";

export default function PlaylistPage() {
  return (
    <ScrollArea className="h-full px-2">
      <div className="h-full flex-col">
        {historyList.map((item, index) => (
          <div
            key={item.id}
            className="text-xs flex items-center gap-2.5 h-[50px] border-b border-foreground/20"
          >
            <div className="w-6">{index + 1}</div>
            <div className="flex-1">{item.name}</div>
            <div className="w-[150px] truncate">{item.singer}</div>
            <div className="w-[60px]">{item.duration}</div>
          </div>
        ))}
        {historyList.map((item, index) => (
          <div
            key={item.id}
            className="text-xs flex items-center gap-2.5 h-[50px] border-b border-foreground/20"
          >
            <div className="w-6">{index + 1}</div>
            <div className="flex-1">{item.name}</div>
            <div className="w-[150px] truncate">{item.singer}</div>
            <div className="w-[60px]">{item.duration}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
