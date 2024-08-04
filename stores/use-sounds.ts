import { TSound } from "@/utils/types/sound";
import { create } from "zustand";

export const useSound = create<TSound>((set) => ({
  isPlaying: false,
  listSongs: [],
  currentSongId: "",

  handlePlayPause: () =>
    set((state) => ({
      isPlaying: state.isPlaying ? false : true,
    })),
}));
