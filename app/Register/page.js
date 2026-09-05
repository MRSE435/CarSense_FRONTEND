"use client"
import {useState} from "react";

import Image from "next/image";
import Link from "next/link";
import CarIcon from "../components/Svgfolder/CarIcon";
import TrendingUp from "@/app/components/Svgfolder/TrendingUp";
import Lightning from "@/app/components/Svgfolder/Lightning"
import ShieldIcon from "@/app/components/Svgfolder/ShieldIcon";
export default  function LoginPage(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const API_URL=process.env.NEXT_PUBLIC_API_URL;
    const handlesubmit=async (e)=>{
        e.preventDefault();
        const Registrationdata={
            Username:username,
            Email:email,
            Password:password
        }
        const response =await fetch(`${API_URL}/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(Registrationdata)
        })

    }
    return(
        <main className="flex flex-row">
            <section className="relative leftsection h-screen w-[40%] bg-gradient-to-br from-[#1E1040] via-[#17134A] to-[#071A3D] hidden lg:flex  p-10 flex-col justify-between h-full
            ">
                <div className="titlediv">
                    <div className="flex gap-4 ">
                        <CarIcon className="w-15 h-15" color="#7C3AED"/>
                        <h1 className="font-bold text-3xl leading-none self-center font-[Poppins]">
                            <span className="text-white">Car</span>
                            <span className="text-purple-500">Sense</span>
                        </h1>
                    </div>
                </div>


                <div className="intro_container flex flex-col gap-2">
                    <p className="text-4xl text-white font-[Poppins] font-semibold">Create Your</p>
                    <p className="text-4xl text-[#7c3AED] font-[Poppins]">CarSense Account</p>
                    <div className="flex flex-col gap-4 text-2xl">
                        <p className="text-white font-[Inter] text-lg">Join Carsense and start predicting car prices</p>
                        <p className="text-white font-[Inter] text-lg">with AI-powered insights</p>
                    </div>
                </div>


                <div className="basic-app-info-login flex flex-col gap-4">
                    <div className="AccuratePredictionsdiv flex gap-6">
                        <div className="bg-[#161821] flex items-start p-2 rounded-xl border border-[#5A42C8]">
                            <TrendingUp className="w-10 h-10 text-[#A370FF] block"/>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="font-[Inter] font-semibold text-base text-white">Accurate Predictions</h1>
                            <p className="font-[Inter] text-sm text-[#A1A1AA]">Ml models trained on real market data</p>
                        </div>

                    </div>


                    <div className="AccuratePredictionsdiv flex gap-6">
                        <div className="bg-[#161821] flex items-start p-2 rounded-xl border border-[#5A42C8]">
                            <ShieldIcon className="w-10 h-10 text-[#A370FF] block"/>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="font-[Inter] font-semibold text-base text-white">Trusted and Reliable</h1>
                            <p className="font-[Inter] text-sm text-[#A1A1AA]">Data-driven insights you can trust</p>
                        </div>

                    </div>


                    <div className="AccuratePredictionsdiv flex gap-6">
                        <div className="bg-[#161821] flex items-start p-2 rounded-xl border border-[#5A42C8]">
                            <Lightning className="w-10 h-10 text-[#A370FF] block"/>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-white font-[Inter] font-semibold text-base">Fast & Easy</h1>
                            <p className="font-[Inter] text-sm text-[#A1A1AA]">Get results in just afew clicks</p>
                        </div>

                    </div>
                </div>

                <Image
                    src="/car-login.png"
                    alt="Luxury car"
                    width={500}
                    height={400}
                    className="object-contain"
                />


            </section>

            <section className="flex justify-center items-center flex-1  h-screen bg-[#0B0B14]">
                <div className="flex  flex-col gap-8  p-10  sm:p-20 border-[#2D2D44] bg-[#141422] rounded-xl">
                    <h1 className="lg:text-2xl text-[#F8FAFC] font-[Inter] font-bold">Create your Account</h1>
                    <h1 className="lg:text-xl  font-[Inter] text-base text-[#A1A1AA]">Fill in the details below to get started</h1>
                    <form onSubmit={handlesubmit} className="flex flex-col gap-8 ">
                        {/*<input type="text" placeholder="Enter Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>*/}
                        <div className="flex flex-col gap-4 text-[#F8FAFC]">
                            <h1 className="lg:text-2xl font-[Inter] font-medium text-base ">Username</h1>
                            <input type="text" placeholder="Enter Username" value={username}
                                   onChange={(e) => setUsername(e.target.value)} className="p-2 w-full border bg-[#1A1A24] rounded-md font-[Inter] text-sm"/>
                        </div>
                        <div className="flex flex-col gap-4 text-[#F8FAFC]">
                            <h1 className="lg:text-2xl font-[Inter] font-medium text-base ">Email Address</h1>
                            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-full border bg-[#1A1A24] rounded-md font-[Inter] text-sm"/>
                        </div>
                        <div className="flex flex-col gap- text-[#F8FAFC]">
                            <h1 className="lg:text-2xl font-[Inter] font-medium text-base ">Password</h1>
                            <input type="password" placeholder=" Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 w-full border rounded-md bg-[#1A1A24] font-[Inter] text-sm"/>
                        </div>


                        <input type="submit" value="Create Account" className="w-full bg-[#7C3AED] p-2 rounded-md font-[Inter] font-semibold"/>
                    </form>

                    <div className="flex gap-2 self-center">
                        <p className="text-white">Already have an account? </p>
                        <Link href="/Login"  className="text-[#7C3AED] font-[Inter] font-semibold">
                            Login
                        </Link>
                    </div>
                </div>

            </section>


        </main>
    )
}