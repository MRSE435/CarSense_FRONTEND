"use client"
import Navbar from "./components/Navbar.jsx";

import {useState} from "react";
import Image from "next/image";
import PredictIcon from "@/app/components/Svgfolder/PredictIcon";
import TrendingUp from "@/app/components/Svgfolder/TrendUp";
import Database from "@/app/components/Svgfolder/Database";
import Cube from "@/app/components/Svgfolder/Cube";
import TargetIcon from "./components/Svgfolder/TargetIcon";
export default function Home() {
   return(
<>
           <Navbar />

           <div className="w-full flex flex-col  ">
                   <div className="flex flex-col md:flex-row   ">
                      <div className="flex flex-1   h-full bg-[#0D0D17] p-8 ">
                                <div className="flex flex-col gap-4 p-4">
                                    <h1 className="text-[clamp(1.5rem,10vw,5rem)] font-bold text-white">Welcome to</h1>
                                    <h1 className="text-[clamp(1.5rem,10vw,5rem)]  text-[#8B5CF6] font-extrabold">CarSense</h1>
                                    <h1 className="text-white text-2xl font-semiboldl">Ai-Powered Car Price Prediction</h1>
                                    <h1 className="text-white text-lg font-normal text-zinc-300">Get accurate,data-driven car price prediction using</h1>
                                    <h1 className="text-white text-lg font-normal text-zinc-300">advanced machine learning models trained  on</h1>
                                    <h1 className="text-white text-lg font-normal text-zinc-300"> 10,000+ real car records</h1>
                                    <div className="flex gap-2 mt-4">
                                        <button className="text-white text-xl rounded-xl lg:text-2xl bg-[#8B5CF6] p-2 pr-4 pl-4 flex self-center gap-1 "><PredictIcon className="  w-8 h-8 text-white"/> Predict Car Price</button>
                                        <button className="text-white text-xl rounded-xl lg:text-2xl bg-[#8B5CF6] p-2 pr-4 pl-4 flex self-center gap-1 "> <TrendingUp className="text-white w-8 h-8"/>Compare Models</button>
                                    </div>

                                </div>
                      </div>
                       <div className="lg:flex-2  flex-1 flex justify-center items-center bg-[#0D0D17]">
                           <img
                               src="/car.png"
                               alt="Car"
                               width={700}
                               height={450}
                               priority
                               className="w-full h-auto object-contain"
                           />
                       </div>
                   </div>
               <div className="bg-[#0D0D17] flex flex-1 cardscontainer ">
                         <div className="w-full grid place-items-center grid-cols-[1fr]  sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] auto-rows-fr  p-4 gap-4 ">





                             <div className=" card-1 text-white min-w-0">
                                 <div className="border  rounded-xl border-[#2A2D4F] p-8 flex  flex-col gap-4 justify-center items-center w-full">
                                     <div className="flex gap-4 lg:gap-8 justify-between">
                                         <div className="bg-[#0F1220] p-4 rounded-full shadow-lg border  border-[#5A42C8]">
                                             <TargetIcon  className=" w-10 h-10  lg:w-20 lg:h-20 text-[#3C0366]"/>
                                         </div>
                                         <div className="flex flex-col gap-2 ">
                                             <h1 className="text-4xl md:text-5xl  ">10,000+</h1>
                                             <h1 className="text-2xl">Car Records</h1>
                                         </div>

                                     </div>

                                     <p className="text-2xl">High quality datasets
                                         with real market records</p>
                                 </div>

                             </div>


                             <div className=" card-1 text-white min-w-0">
                                 <div className="border  rounded-xl border-[#2A2D4F] p-8 flex  flex-col gap-4 justify-center items-center w-full">
                                     <div className="flex gap-4 lg:gap-8 justify-between">
                                         <div className="bg-[#0F1220] p-4 rounded-full shadow-lg border  border-[#5A42C8]">
                                             <TargetIcon  className=" w-10 h-10  lg:w-20 lg:h-20 text-[#3C0366]"/>
                                         </div>
                                         <div className="flex flex-col gap-2 ">
                                             <h1 className="text-4xl md:text-5xl  ">10,000+</h1>
                                             <h1 className="text-2xl">Car Records</h1>
                                         </div>

                                     </div>

                                     <p className="text-2xl">High quality datasets
                                         with real market records</p>
                                 </div>

                             </div>

                             <div className=" card-1 text-white min-w-0">
                                 <div className="border  rounded-xl border-[#2A2D4F] p-8 flex  flex-col gap-4 justify-center items-center w-full">
                                     <div className="flex gap-4 lg:gap-8 justify-between">
                                         <div className="bg-[#0F1220] p-4 rounded-full shadow-lg border  border-[#5A42C8]">
                                             <TargetIcon  className=" w-10 h-10  lg:w-20 lg:h-20 text-[#3C0366]"/>
                                         </div>
                                         <div className="flex flex-col gap-2 ">
                                             <h1 className="text-4xl md:text-5xl  ">10,000+</h1>
                                             <h1 className="text-2xl">Car Records</h1>
                                         </div>

                                     </div>

                                     <p className="text-2xl">High quality datasets
                                         with real market records</p>
                                 </div>

                             </div>







                             <div className=" card-1 text-white min-w-0">
                                 <div className="border  rounded-xl border-[#2A2D4F] p-8 flex  flex-col gap-4 justify-center items-center w-full">
                                     <div className="flex gap-4 lg:gap-8 justify-between">
                                         <div className="bg-[#0F1220] p-4 rounded-full shadow-lg border  border-[#5A42C8]">
                                             <TargetIcon  className=" w-10 h-10  lg:w-20 lg:h-20 text-[#3C0366]"/>
                                         </div>
                                         <div className="flex flex-col gap-2 ">
                                             <h1 className="text-4xl md:text-5xl  ">10,000+</h1>
                                             <h1 className="text-2xl">Car Records</h1>
                                         </div>

                                     </div>

                                     <p className="text-2xl">High quality datasets
                                         with real market records</p>
                                 </div>

                             </div>





                         </div>
               </div>
           </div>

</>

   );
}