import ProfileIcon from "@/app/components/carsense_profileicons/ProfileIcon";
import CompareIcon from "@/app/components/carsense_profileicons/CompareIcon";
import ChevronRightIcon from "@/app/components/carsense_profileicons/ChevronRightIcon";
import HistoryIcon from "@/app/components/carsense_profileicons/HistoryIcon";
import SettingsIcon from "@/app/components/carsense_profileicons/SettingsIcon";
import LogoutIcon from "./carsense_profileicons/LogoutIcon";
import PredictIcon from "./carsense_profileicons/PredictIcon";
import HomeIcon from "@/app/components/carsense_profileicons/HomeIcon";
import AboutIcon from "@/app/components/carsense_profileicons/AboutIcon";

import Link from "next/link";

export default function DropdownMenue(){



    return(
        <>
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


                <div className="flex flex-col gap-2 p-2">
                    <Link href="/">
                        <div className="profile flex justify-between rounded-lg hover:bg-[#1F3554] hover:text-blue-400  transition-colors duration-200 hover:p-2">
                            <div className="flex gap-2">
                                <HomeIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                <p>Home</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                        </div>
                    </Link>


                    <Link href="/Predict">
                        <div className="profile flex justify-between rounded-lg hover:bg-[#1F3554] hover:text-blue-400  transition-colors duration-200 hover:p-2">
                            <div className="flex gap-2">
                                <PredictIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                <p>Predict</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                        </div>
                    </Link>


                    <Link href="/Compare">

                        <div className="profile flex justify-between rounded-lg hover:bg-[#1F3554] hover:text-blue-400  transition-colors duration-200 hover:p-2">
                            <div className="flex gap-2">
                                <CompareIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                <p>Compare</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                        </div>
                    </Link>


                    <div className="w-[80%] h-px bg-gray-700 mx-auto"></div>
                    <Link href="/History">

                        <div className="profile flex justify-between rounded-lg hover:bg-[#1F3554] hover:text-blue-400  transition-colors duration-200 hover:p-2">
                            <div className="flex gap-2">
                                <HistoryIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                <p>Prediction History</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                        </div>
                    </Link>

                    <Link href="/Profile">
                        <div className="profile flex justify-between rounded-lg hover:bg-[#1F3554] hover:text-blue-400  transition-colors duration-200 hover:p-2">
                            <div className="flex gap-2">
                                <ProfileIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                <p>Profile</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                        </div>
                    </Link>



                    <Link href="/Settings">
                        <div className="profile flex justify-between rounded-lg hover:bg-[#1F3554] hover:text-blue-400  transition-colors duration-200 hover:p-2 ">
                            <div className="flex gap-2">
                                <SettingsIcon  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                                <p>Settings</p>
                            </div>
                            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-300 lg:text-white"/>
                        </div>
                    </Link>



                    <div className="w-[80%] h-px bg-gray-700 mx-auto"></div>

                    <div className="flex gap-4">
                        <LogoutIcon className="  sm:w-5 sm:h-5 lg:w-8 lg:h-8 text-red-500"/>
                        <p className="text-red-500">Logout</p>
                    </div>

                </div>


            </div>
        </>
    )
}