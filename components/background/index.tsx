import React from "react";

export const Background = () => {
  return (
    <>
      <div
        className="-z-[2] absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-no-repeat bg-cover bg-center blur-md opacity-70 transition-all scale-110"
        style={{
          backgroundImage:
            "url(https://netease-music.fe-mm.com/img/bg-2.4d4b3014.jpg)",
        }}
      />
      <div className="-z-[1] absolute top-0 left-0 bottom-0 right-0 w-full bg-[rgba(0,0,0,.4)]" />
    </>
  );
};
