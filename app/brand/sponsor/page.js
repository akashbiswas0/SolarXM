"use client";
import { checkIsBrand, registerAsBrand } from "@/utils";
import BrandNabvar from "../../../components/BrandNav";
import { useEffect, useState } from "react";

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
      <BrandNabvar />
      <h1 className="scroll-m-20 text-white text-5xl text-center font-extrabold tracking-tight lg:text-6xl mt-10">
                    Setup your <mark className="bg-cyan-500 ml-1 rounded-lg px-3">Brand</mark> .
                 </h1>
                
      <div className="flex flex-wrap content-center mt-10  justify-center">
      
      <button
      className="border-2 px-8 text-3xl font-bold bg-emerald-500 hover:bg-white hover:text-black text-white border-black py-1 mb-24 "
        onClick={async () => {
          const res = await registerAsBrand();
          console.log(res);
        }}
      >
        {hasJoined ? "successfully joined" : "join harmony"}
      </button>
      </div>
      
    </div>
  );
}
