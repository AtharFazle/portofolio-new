import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";

export function Section1() {

  return (
    <div className="layout-section flex justify-center items-center">
      <Spotlight className="top-40 left-0 md:left-72 md:-top-24" fill="white" />
      <div className="max-w-7xl mx-auto z-10 w-full flex flex-col gap-1 justify-center items-center">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
          Athar Fazle Mawla
        </h1>
        <div className="w-[20rem] md:w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full max-w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        {/* <p className="mt-4 font-normal max-w-text-center mx-auto">
            {isReady && (
            <TextGenerateEffect className="text-neutral-300 text-xs" words={words} />
            )}
          </p> */}
      </div>
    </div>
  )
}
