"use client"
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CarIcon from "../components/Svgfolder/CarIcon";
import Image from "next/image";
import TrendingUp from "@/app/components/Svgfolder/TrendingUp";
import Lightning from "@/app/components/Svgfolder/Lightning"
import ShieldIcon from "@/app/components/Svgfolder/ShieldIcon";
export default  function LoginPage(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const API_URL=process.env.NEXT_PUBLIC_API_URL;
    const searchparams=useSearchParams();
    const callbackurl=searchparams.get("callbackurl")
    const router=useRouter();
    const handlesubmit=async (e)=>{
        e.preventDefault();
        const logindata={
            Username:username,
            Email:email,
            Password:password
        }
        const response =await fetch(`${API_URL}/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            credentials:"include",
            body:JSON.stringify(logindata),
        })
        if(response.status === 200){
            router.push(callbackurl || "/")
        }

    }
    return(
        <main className="flex flex-row">
            <section className="relative leftsection h-screen w-[40%] bg-gradient-to-br from-[#1E1040] via-[#17134A] to-[#071A3D] hidden lg:flex  p-10 flex-col justify-between h-full
            ">
               <div className="titlediv">
                   <div className="flex gap-4 ">
                       <CarIcon   className="w-15 h-15" color="#7C3AED" />
                       <h1 className="font-bold text-3xl leading-none self-center">
                           <span className="text-white">Car</span>
                           <span className="text-purple-500">Sense</span>
                       </h1>
                   </div>
               </div>


                <div className="intro_container flex flex-col gap-2">
                    <p className="text-4xl text-white">Welcome Back to</p>
                    <p  className="text-4xl text-[#7c3AED]">CarSense</p>
                    <div className="flex flex-col gap-4 text-2xl">
                        <p className="text-white">Login to continue predicting car prices</p>
                        <p className="text-white">and manage your history</p>
                    </div>
                </div>


                <div className="basic-app-info-login flex flex-col gap-4">
                   <div className="AccuratePredictionsdiv flex gap-6">
                       <div className="bg-[#161821] flex items-start p-2 rounded-xl border border-[#5A42C8]">
                           <TrendingUp className="w-10 h-10 text-[#A370FF] block" />
                       </div>

                       <div className="flex flex-col gap-4">
                           <h1 className="font-bold text-white">Accurate Predictions</h1>
                           <p className="text-white">Ml models trained on real market data</p>
                       </div>

                   </div>


                    <div className="AccuratePredictionsdiv flex gap-6">
                        <div className="bg-[#161821] flex items-start p-2 rounded-xl border border-[#5A42C8]">
                            <ShieldIcon className="w-10 h-10 text-[#A370FF] block" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-white">Trusted and Reliable</h1>
                            <p className="text-white">Data-driven insights you can trust</p>
                        </div>

                    </div>


                    <div className="AccuratePredictionsdiv flex gap-6">
                        <div className="bg-[#161821] flex items-start p-2 rounded-xl border border-[#5A42C8]">
                            <Lightning className="w-10 h-10 text-[#A370FF] block" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-white">Fast & Easy</h1>
                            <p className="text-white">Get results in just afew clicks</p>
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
                    <h1 className="font-bold lg:text-2xl text-[#F8FAFC]">Log in to Your Account</h1>
                    <h1 className="lg:text-xl text-[#F8FAFC]">Enter your details to access your account</h1>
                    <form onSubmit={handlesubmit} className="flex flex-col gap-8 ">
                        {/*<input type="text" placeholder="Enter Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>*/}
                        <div className="flex flex-col gap-4 text-[#F8FAFC]">
                            <h1 className="lg:text-2xl">Email Address</h1>
                            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 w-full border bg-[#1A1A24] rounded-md"/>
                        </div>
                        <div className="flex flex-col gap- text-[#F8FAFC]">
                            <h1 className="lg:text-2xl">Password</h1>
                            <input type="password" placeholder=" Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 w-full border rounded-md bg-[#1A1A24]"/>
                        </div>
                        <div className="p-2 flex self-center">
                            <h1 className="lg:text-xl text-purple-900 underline decoration-purple-950">Forgot Password?</h1>
                        </div>

                        <input type="submit" value="Login" className="w-full bg-[#7C3AED] p-2 rounded-md"/>
                    </form>

                    <div className="flex gap-2 self-center">
                        <p className="text-white">Don't have an account ? </p>
                        <Link href="/Register"  className="text-[#7C3AED]">
                            Register
                        </Link>
                    </div>
                </div>

            </section>

        </main>
    )
}