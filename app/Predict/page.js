"use client"
import Navbar from '@/app/components/Navbar'
import Normalform from "@/app/components/Normalform";
import Dashboard from "@/app/components/Dashboard.jsx";
import {useState} from "react";
export default function Home() {
    const   [prediction,setprediction]=useState(null);
    return (
        <>
            <Navbar/>
            {/*<div  className="w-screen h-screen hidden bg-blue-950 "></div>*/}
            <div className={`w-full flex flex-col lg:flex-row lg:h-screen  ${!prediction?"lg:justify-center lg:items-center":""}   bg-[#0F111A]`}>

                <div className={`w-full ${!prediction?"lg:w-[50%] lg:rounded-xl":"lg:w-[20%]"}  bg-[#1C1E37] p-4 `}>
                    <Normalform setprediction={setprediction}/>
                </div>

                {
                    prediction &&(
                        <div className="flex-1    min-h-screen bg-[#0F111A]     sm:p-6  ">
                            <Dashboard  prediction={prediction} />
                        </div>
                    )
                }

            </div>
        </>
    );
}

