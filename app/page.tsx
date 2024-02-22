import React from "react";
import { Section1 } from "./home/section1";
import Section2 from "./home/section2";
import Section3 from "./home/section3";
// import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (

    <div className="w-full h-full bg-black antialiased bg-grid-white/[0.02] text-white relative">
          {/* <TracingBeam className=""> */}
          <Section1/>
          <Section2/>
          <Section3/>
          {/* </TracingBeam> */}

    </div>

  );
}
