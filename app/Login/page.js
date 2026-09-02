"use client"
import {useState} from "react";
import {useSearchParams} from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
            <section className="leftsection h-screen w-[40%] bg-red-500
            ">

            </section>
            <section className="flex justify-center items-center flex-1  h-screen bg-[#0B0B14]">
                <div className="flex  flex-col gap-8 p-20 border bg-[#141422] rounded-xl">
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