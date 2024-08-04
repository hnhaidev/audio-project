"use client";

import { FC } from "react";
import { Volume1Icon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { Slider } from "./slider";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentProps<typeof Slider>;

type TVolume = {
  className?: string;
  onClickVolume?: () => void;
};

export const Volume: FC<TVolume & SliderProps> = (props) => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  const currentValue = props.value?.[0] || 0;

  return (
    <div className={cn("w-fit md:w-[150px]", props.className)}>
      <div className="flex items-center gap-x-2.5">
        <TooltipProvider delayDuration={300}>
          <Tooltip {...(isTablet && { open: false })}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  props.onClickVolume?.();
                }}
              >
                {currentValue <= 1 && currentValue > 0.5 && (
                  <Volume2Icon className="w-5 h-5" />
                )}
                {currentValue <= 0.5 && currentValue > 0 && (
                  <Volume1Icon className="w-5 h-5" />
                )}
                {currentValue === 0 && <VolumeXIcon className="w-5 h-5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-foreground/20">
              <div className="h-[100px]">
                <Slider
                  {...props}
                  orientation="vertical"
                  classNameTrack="w-[2px] h-full"
                  className="h-[100px] flex-col"
                  classNameRange="w-full"
                />
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex-1 hidden md:block">
          <Slider {...props} />
        </div>
      </div>
    </div>
  );
};
