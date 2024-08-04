import React from "react";
import { Header } from "@/components/header";
import { Background } from "@/components/background";
import { AudioBar } from "@/components/audio-bar";
import { Menu } from "../menu";

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="relative h-screen w-screen flex flex-col px-6 overflow-hidden">
        <Header />
        <div className="h-[calc(100%-170px)] sm:h-[calc(100%-134px)] flex">
          <div className="flex flex-1 flex-col">
            <Menu />
            <div className="flex-1 h-[calc(100%-40px)]">{children}</div>
          </div>
          <div className="w-[310px] pl-2.5 hidden md:block">Play</div>
        </div>
        <AudioBar />
      </div>
      <Background />
    </div>
  );
};
