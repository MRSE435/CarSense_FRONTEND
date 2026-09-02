"use client"
import {useState} from "react";

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
        <main>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder=" Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Register"/ >
            </form>
        </main>
    )
}