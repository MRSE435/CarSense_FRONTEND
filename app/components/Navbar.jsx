import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex relative z-50  bg-[#3E3788] lg:p-4 lg:pb-2 text-2xl  p-2     justify-between  border-b-white pb-0" >
            <div className="flex gap-4">
                <a className=" z-10 text-black text-sm   whitespace-nowrap sm:text-2xl md:text-xl" href="#">  <svg width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#f6f5f4" stroke="#f6f5f4" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path> <rect fill="none" width="24" height="24"></rect> </g></svg> </a>
                <h1>AutoWorth</h1>
            </div>


            <div className=" text-sm hidden   text-whitetext-black gap-10 sm:gap-5   md:flex     lg:text-xl    sm:text-2xl md:text-xl ">
                <Link href="/">Home</Link>
                <Link href="/Predict">Predict</Link>
                <Link href="/Compare">Compare</Link>
                <Link href="/About">About</Link>


            </div>
            <div className=" gap-3 text-black  md:hidden   lg:flex list-none text-xl  align-middle">
                <div className="bg-white/10 rounded-xl  text-xs gap-4 hidden  lg:flex p-2  ">
                    <li className="text-white">5 Models.</li>
                    <li>Best R² 0.947.</li>
                    <li>10k+ Car Records</li>
                </div>
                <svg  className="text-sm md:hidden text-black" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="8" x2="24" y2="8" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                    <line x1="4" y1="14" x2="24" y2="14" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                    <line x1="4" y1="20" x2="24" y2="20" stroke="black" stroke-width="2.5" stroke-linecap="round" />
                </svg>
            </div>
        </nav>
    );
}