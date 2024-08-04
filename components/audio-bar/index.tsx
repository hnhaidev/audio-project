"use client";

import React, { useState } from "react";
import { Slider } from "../ui/slider";
import { Volume } from "../ui/volume";
import { MusicButton } from "../ui/music-button";
import { Repeat1Icon, RepeatIcon } from "lucide-react";
import { Button } from "../ui/button";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import Player from "../ui/player";
import { useSound } from "@/stores/use-sounds";
import { getTime } from "@/utils/helpers/time-ranges";

export const AudioBar = () => {
  const { isPlaying, handlePlayPause } = useSound();
  const isTablet = useMediaQuery("(max-width: 640px)");
  const audio =
    "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";

  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);

  return (
    <div
      className={cn(
        "w-full py-4 text-foreground flex items-center justify-center gap-x-6 gap-y-2",
        isTablet && "flex-col relative"
      )}
    >
      <MusicButton
        className={cn(isTablet ? "order-2 w-3/5" : "w-[180px]")}
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
      />
      <div className={cn("flex-1", isTablet ? "order-1 w-full" : "pl-6")}>
        <div className="flex flex-col">
          <div className="flex items-center justify-between text-xs">
            <div className="flex-1 truncate text-start">
              Chung ta cua hien tai
            </div>
            <div className="w-20 text-end">{`${getTime(appTime)}/${getTime(
              duration
            )}`}</div>
          </div>
          <Slider
            value={[appTime]}
            max={duration}
            min={0}
            onValueChange={(value) => setSeekTime(value[0])}
          />
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className={cn(isTablet && "absolute left-0 bottom-4")}
        onClick={() => setRepeat((prev) => !prev)}
      >
        {repeat ? (
          <Repeat1Icon className="w-5 h-5" />
        ) : (
          <RepeatIcon className="w-5 h-5" />
        )}
      </Button>
      <Volume
        className={cn(isTablet && "absolute right-0 bottom-4")}
        value={[volume]}
        max={1}
        min={0}
        step={0.1}
        onValueChange={(value) => setVolume(value[0])}
        onClickVolume={() => {
          setVolume((prev) => (prev === 0 ? 1 : 0));
        }}
      />
      <Player
        src={audio}
        volume={volume}
        isPlaying={isPlaying}
        seekTime={seekTime}
        repeat={repeat}
        // onEnded={handleNextSong}
        onTimeUpdate={(event) => setAppTime(event.currentTarget.currentTime)}
        onLoadedData={(event) => setDuration(event.currentTarget.duration)}
      />
    </div>
  );
};
