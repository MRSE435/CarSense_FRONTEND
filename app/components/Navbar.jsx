import Link from "next/link";
import ProfileIcon from "@/app/components/carsense_profileicons/ProfileIcon";
import CompareIcon from "@/app/components/carsense_profileicons/CompareIcon";
import ChevronRightIcon from "@/app/components/carsense_profileicons/ChevronRightIcon";
import HistoryIcon from "@/app/components/carsense_profileicons/HistoryIcon";
import SettingsIcon from "@/app/components/carsense_profileicons/SettingsIcon";
import LogoutIcon from "./carsense_profileicons/LogoutIcon";
export default function Navbar() {
    return (<nav
            className="flex relative z-50  bg-[#3E3788] lg:p-4 lg:pb-2 text-2xl  p-2     justify-between  border-b-white pb-0">
            <div className="flex gap-4">
                <a className=" z-10 text-black text-sm   whitespace-nowrap sm:text-2xl md:text-xl" href="#">
                    <svg width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         fill="#f6f5f4" stroke="#f6f5f4" stroke-width="0.00024000000000000003">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path>
                            <rect fill="none" width="24" height="24"></rect>
                        </g>
                    </svg>
                </a>
                <h1>AutoWorth</h1>
            </div>


            <div
                className=" text-sm hidden   text-whitetext-black gap-10 sm:gap-5   md:flex     lg:text-xl    sm:text-2xl md:text-xl ">
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
                <div className="relative">
                    <div
                        className="bg-red-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden">

                    </div>
                    <div className="absolute  bg-[#1E293B] rounded-xl mt-2 top-full right-0 w-72 p-6">
                        <div className="userinfo flex justify-around gap-6 border-b border-gray-500 p-4">
                            <div className="bg-[#3882F6] p-4 rounded-full shrink-0 w-12 h-12 flex justify-center items-center ">
                                <p>MO</p>
                            </div>
                            <div className="flex flex-col self-center">
                                <p className="text-xl  text-[#F8FAFC] whitespace-nowrap">Mohammed Owais</p>
                                <p className="text-xl text-[#94A3B8]">owais@gmail.com</p>
                            </div>

                        </div>


                        <div className="flex flex-col gap-2">
                            <div className="profile flex justify-between">
                                <div className="flex gap-2">
                                    <ProfileIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                    <p>Profile</p>
                                </div>
                                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                            </div>

                            <div className="profile flex justify-between">
                                <div className="flex gap-2">
                                    <HistoryIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                    <p>Prediction History</p>
                                </div>
                                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                            </div>

                            <div className="profile flex justify-between">
                                <div className="flex gap-2">
                                    <SettingsIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                    <p>Settings</p>
                                </div>
                                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                            </div>

                            <div className="w-[80%] h-px bg-gray-700 mx-auto"></div>

                            <div className="flex gap-4">
                                <LogoutIcon className="  sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-red-500"/>
                                <p className="text-red-500">Logout</p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </nav>);
}