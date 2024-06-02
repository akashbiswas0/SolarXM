"use client";
import { checkIsBrand, registerAsBrand } from "@/utils";
import BrandNav from "../../components/BrandNav";
import { useEffect, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Brand() {
  const [hasJoined, setHasJoined] = useState(false);
  useEffect(() => {
    const checkBrandValidity = async () => {
      const result = await checkIsBrand();
      if (result) {
        setHasJoined(true);
      }
      console.log("is brand ?", result);
    };

    checkBrandValidity();
  }, [hasJoined]);

  return (
    <div className="bg-black">
      <BrandNav />
      {/* <h1 className="scroll-m-20 text-5xl text-center font-extrabold tracking-tight lg:text-6xl mt-10">
                    Setup your <mark className="bg-cyan-500 ml-1 rounded-lg px-3">Brand</mark> .
                 </h1> */}
      <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-50 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <div className="flex flex-wrap content-center  justify-center">
        <button
      className="border-2 px-8 text-3xl font-bold bg-emerald-500 hover:bg-white hover:text-black text-white border-black py-1 rounded-xl mb-24 "
        onClick={async () => {
          const res = await registerAsBrand();
          console.log(res);
        }}
      >
        {hasJoined ? "successfully joined" : "join harmony"}
      </button>
      </div>
      </div>
      <BackgroundBeams />
    </div>
      
    </div>
  );
}