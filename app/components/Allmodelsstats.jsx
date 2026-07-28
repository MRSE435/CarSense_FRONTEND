export default function  Allmodelsstats({prediction}){
    return (
        <div className="border  flex flex-col bg-[#232B43] rounded-2x p-4 gap-2 min-h-0">
            <h1>All Models</h1>

            <div className="flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto no-scrollbar">
                <div className="flex w-full gap-4 bg-[#E8E5FF] p-2 rounded-2xl shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="url(#visibleTrophyBg)" viewBox="0 0 24 24" strokeWidth={1.75} stroke="url(#visibleTrophyBorder)" className="w-5 h-5 shrink-0 filter drop-shadow-[0_0_8px_rgba(167,139,250,0.45)]">
                        <defs>
                            {/* Lightened, more opaque gradient fill so it stands out against #2B2B2B */}
                            <linearGradient id="visibleTrophyBg" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" /> {/* Vibrant Purple tint */}
                                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" /> {/* Soft Lavender fade */}
                            </linearGradient>

                            {/* Higher contrast border stroke */}
                            <linearGradient id="visibleTrophyBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#DDD6FE" /> {/* Bright White-Lavender for sharp highlights */}
                                <stop offset="50%" stopColor="#A78BFA" />  {/* Core Theme Lavender */}
                                <stop offset="100%" stopColor="#6366F1" /> {/* Deep Indigo for shadow side */}
                            </linearGradient>
                        </defs>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6H5v3c0 1.5 1 3 3 3.5M16 6h3v3c0 1.5-1 3-3 3.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v4M9 19h6M7 21h10" />
                    </svg>


                    <div className="flex justify-between w-full  ">
                        <div className="flex flex-col">
                            <ul className="list-none ">
                                <li>Xgboost</li>
                                <li>Regressor</li>
                            </ul>

                        </div>
                        <div className="flex items-center">
                            <ul className="list-none flex gap-4 i">
                                <li>R² 0.94</li>
                                <li>₹18k</li>
                                <li>₹{prediction.models["xgboost"].prediction}</li>
                                <li className="bg-blue-600 rounded-xl text-white text-xl pl-2 pr-2 ">Best</li>
                            </ul>

                        </div>
                    </div>
                </div>

                {/*other models*/}
                <div className="flex justify-between w-full p-2 bg-[#1F2335] shrink-0 text-white rounded-xl">
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="url(#whiteTrendBg)" viewBox="0 0 24 24" strokeWidth={2} stroke="url(#whiteTrendBorder)" className="w-5 h-5 shrink-0 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]">
                            <defs>
                                {/* Subtle internal gradient so the arrow isn't completely flat */}
                                <linearGradient id="whiteTrendBg" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.03" />
                                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                                </linearGradient>

                                {/* High-contrast crisp white border gradient */}
                                <linearGradient id="whiteTrendBorder" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#94A3B8" />   {/* Muted slate gray at the start of the line */}
                                    <stop offset="60%" stopColor="#E2E8F0" />  {/* Bright gray transitions */}
                                    <stop offset="100%" stopColor="#FFFFFF" /> {/* Piercing pure white at the arrowhead tip */}
                                </linearGradient>
                            </defs>

                            {/* The stepping trendline path */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
                            {/* The sharp arrowhead caps */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h4.5v4.5" />
                        </svg>

                        <ul>
                            <li>Random Forest</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none flex gap-4 i">
                            <li>R² {prediction.models["random_forest"].test_r2}</li>
                            <li>₹{prediction.models["random_forest"].mae}</li>
                            <li>₹{prediction.models["random_forest"].prediction}</li>

                        </ul>
                    </div>
                </div>

                {/*random forest info*/}
                <div className="flex justify-between w-full p-2 bg-[#1F2335] shrink-0 text-white rounded-xl">
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="url(#whiteTrendBg)" viewBox="0 0 24 24" strokeWidth={2} stroke="url(#whiteTrendBorder)" className="w-5 h-5 shrink-0 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]">
                            <defs>
                                {/* Subtle internal gradient so the arrow isn't completely flat */}
                                <linearGradient id="whiteTrendBg" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.03" />
                                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                                </linearGradient>

                                {/* High-contrast crisp white border gradient */}
                                <linearGradient id="whiteTrendBorder" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#94A3B8" />   {/* Muted slate gray at the start of the line */}
                                    <stop offset="60%" stopColor="#E2E8F0" />  {/* Bright gray transitions */}
                                    <stop offset="100%" stopColor="#FFFFFF" /> {/* Piercing pure white at the arrowhead tip */}
                                </linearGradient>
                            </defs>

                            {/* The stepping trendline path */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
                            {/* The sharp arrowhead caps */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h4.5v4.5" />
                        </svg>

                        <ul>
                            <li>Linear Regression</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none flex gap-4 i">
                            <li>R² {prediction.models["linear_regression"].test_r2}</li>
                            <li>₹{prediction.models["linear_regression"].mae}</li>
                            <li>₹{prediction.models["linear_regression"].prediction}</li>

                        </ul>
                    </div>
                </div>

                {/*ridge info*/}
                <div className="flex justify-between w-full p-2 bg-[#1F2335] shrink-0 text-white rounded-xl">
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="url(#whiteTrendBg)" viewBox="0 0 24 24" strokeWidth={2} stroke="url(#whiteTrendBorder)" className="w-5 h-5 shrink-0 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]">
                            <defs>
                                {/* Subtle internal gradient so the arrow isn't completely flat */}
                                <linearGradient id="whiteTrendBg" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.03" />
                                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                                </linearGradient>

                                {/* High-contrast crisp white border gradient */}
                                <linearGradient id="whiteTrendBorder" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#94A3B8" />   {/* Muted slate gray at the start of the line */}
                                    <stop offset="60%" stopColor="#E2E8F0" />  {/* Bright gray transitions */}
                                    <stop offset="100%" stopColor="#FFFFFF" /> {/* Piercing pure white at the arrowhead tip */}
                                </linearGradient>
                            </defs>

                            {/* The stepping trendline path */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
                            {/* The sharp arrowhead caps */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h4.5v4.5" />
                        </svg>

                        <ul>
                            <li>Ridge Regression</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none flex gap-4 i">
                            <li>R² {prediction.models["ridge"].test_r2}</li>
                            <li>₹{prediction.models["ridge"].mae}</li>
                            <li>₹{prediction.models["ridge"].prediction}</li>

                        </ul>
                    </div>
                </div>

                {/*lasso model*/}
                <div className="flex justify-between w-full p-2 bg-[#1F2335] shrink-0 text-white rounded-xl">
                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="url(#whiteTrendBg)" viewBox="0 0 24 24" strokeWidth={2} stroke="url(#whiteTrendBorder)" className="w-5 h-5 shrink-0 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.15)]">
                            <defs>
                                {/* Subtle internal gradient so the arrow isn't completely flat */}
                                <linearGradient id="whiteTrendBg" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.03" />
                                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
                                </linearGradient>

                                {/* High-contrast crisp white border gradient */}
                                <linearGradient id="whiteTrendBorder" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#94A3B8" />   {/* Muted slate gray at the start of the line */}
                                    <stop offset="60%" stopColor="#E2E8F0" />  {/* Bright gray transitions */}
                                    <stop offset="100%" stopColor="#FFFFFF" /> {/* Piercing pure white at the arrowhead tip */}
                                </linearGradient>
                            </defs>

                            {/* The stepping trendline path */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5" />
                            {/* The sharp arrowhead caps */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h4.5v4.5" />
                        </svg>

                        <ul>
                            <li>Lasso Regression</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-none flex gap-4 i">
                            <li>R² {prediction.models["lasso"].test_r2}</li>
                            <li>₹{prediction.models["lasso"].mae}</li>
                            <li>₹{prediction.models["lasso"].prediction}</li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}




