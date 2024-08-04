"use client";

import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface IMusicButton {
  isPlaying?: boolean;
  className?: string;
  handlePlayPause?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MusicButton: React.FC<IMusicButton> = ({
  className,
  isPlaying,
  handlePlayPause,
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Button variant="ghost" size="icon">
        <SkipBackIcon className="w-5 h-5" />
      </Button>
      <Button variant="secondary" size="icon" onClick={handlePlayPause}>
        {isPlaying ? (
          <PauseIcon className="w-4 h-4" />
        ) : (
          <PlayIcon className="w-4 h-4" />
        )}
      </Button>
      <Button variant="ghost" size="icon">
        <SkipForwardIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};
