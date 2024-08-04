"use client";

import React, { useRef, useEffect } from "react";

interface PlayerProps {
  src: string;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded?: React.ReactEventHandler<HTMLAudioElement>;
  onTimeUpdate?: React.ReactEventHandler<HTMLAudioElement>;
  onLoadedData?: React.ReactEventHandler<HTMLAudioElement>;
  repeat?: boolean;
}

const Player: React.FC<PlayerProps> = ({
  src,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeat,
}) => {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = seekTime;
    }
  }, [seekTime]);

  useEffect(() => {
    if (ref.current) {
      ref.current.load();
    }
  }, [src]);

  return (
    <audio
      src={src}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
