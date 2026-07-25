"use client"
import Navbar from '@/app/components/Navbar.jsx'
import Trophy from '@/app/components/Svgfolder/Trophy.jsx'
import BulletDot from '@/app/components/Svgfolder/BulletDot.jsx'
import Star from '@/app/components/Svgfolder/Star.jsx'
import TrainVsTestRsquare from "@/app/Charts/TrainVsTestRsquare";
import TrendUp from "@/app/components/Svgfolder/TrendUp";
import ComparisonFeature from "@/app/Charts/ComparisonFeature";
import TargetIcon from "@/app/components/Svgfolder/TargetIcon";
import {TableComponent} from "@/app/Charts/TableComponent";
import {useEffect, useState} from "react";
import PriceComparison from "@/app/Charts/PriceComparison";
import HyperParameter from "@/app/components/Hyperparametercards/HyperParameter";
import CheckCircle from "@/app/components/Svgfolder/CheckCircle";
import InfoIcon from "@/app/components/Svgfolder/InfoIcon";
export default function Compare() {
    const [pricedata, setpricedata] = useState(null)
    const [loading, setloading] = useState(true)
    const [featuresdataloading, setfeaturesdataloading] = useState(true)
    const [tabledataloading, settabledataloading] = useState(true)
    const [selectedmodel, setselectedmodel] = useState("RandomForest")
    const [models, setModels] = useState([]);
    const [featureImportance, setFeatureImportance] = useState([]);
    // const [selectitem,setselectitem] = useState(false);


    useEffect(() => {
        fetch("http://127.0.0.1:5000/data-pricecomparison")
            .then(res => res.json())
            .then(data => {
                setpricedata(data)
                setloading(false)
            })
            .catch(error => {
                    console.log(error)
                    setloading(false)
                }
            )

    }, []);


    // use effect for model comparison table
    useEffect(() => {
        fetch("http://127.0.0.1:5000/data-tabledata")
            .then(res => res.json())
            .then(data => {
                setModels(data.models)
                settabledataloading(false)
            });
    }, []);


    useEffect(() => {
        fetch("http://127.0.0.1:5000/data-feature-importance")
            .then(res => res.json())
            .then(data => {
                    setFeatureImportance(data)
                    setfeaturesdataloading(false)
                }
            );
    }, []);


    console.log("fetureimprotancedata", featureImportance);

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-[#0F1021] w-screen">
                <div className="page-heading  flex justify-between bg-[#0F1021] text-white p-3">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">Compare Models</h1>
                        <p className="font-sans">Compare performances,metrics.feature importance and hyperparameters across models</p>
                    </div>

                    <div className="">
                        <div className="flex gap-2  items-center">
                           <InfoIcon className="w-5 h-5 text-white"/>
                            <h1 className="text-white">Evaluation on test set</h1>
                        </div>

                    </div>

                </div>

                {/*Model Toolbar*/}
                <div className="model-wrapper-toolbar flex flex-col gap-2 p-4 ">

                    <div className="best-performing-model  text-white flex flex-col lg:flex-row bg-[#17182E] hover:bg-[#1C1E37]   border
    border-[#5A42C8]
    rounded-2xl
    shadow-xl
    divide-[#2A2D4F]
    divide-y
lg:divide-y-0
lg:divide-x">
                        <div className="flex gap-5   items-center flex-2">
                            <Trophy/>
                            <div>
                                <h1>Best performing model</h1>
                                <p className="text-white text-2xl">XGBoost</p>
                            </div>

                        </div>

                        <div className="test-r-score flex flex-col gap-2  p-3   flex-1">
                            <div className=" flex flex-col items-cente doubtdivr">
                                <h1>Test R² Score</h1>
                                <div className="flex gap-4">
                                    <h1 className=" font-bold text-white">0.94</h1>
                                    <div className="bg-[#39FF14] text-[#1FAA0A] w-fit p-1 rounded-xl">
                                        Excelent
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*mae-box*/}
                        <div className="flex flex-col gap-2  p-3 flex-1  ">
                            <div className="justify-center items-center">
                                <h1>MAE</h1>
                                <h>₹91,985</h>
                            </div>

                        </div>

                        <div className="p-3 flex-2 ">
                            <p>
                                Xgboost gives the most accurate predctions with the lowest ad best generalization
                            </p>
                        </div>

                    </div>

                    <div className="flex gap-2 flex-col lg:flex-row ">
                        <div className="all-models-list flex flex-1 rounded-xl  overflow-hidden  text-white  divide-y
lg:divide-y-0
lg:divide-x">

                            <div className={`${selectedmodel === "Linear" ? "bg-[#7C3AED]" : "bg-[#17182E] "} 
border-[#2A2D4F] flex  flex-1 hover:bg-[#1F2240] hover:border-[#7C3AED] transition-all duration-300 `}
                                 onClick={() => setselectedmodel("Linear")}>

                                <BulletDot className="w-3 h-3 text-blue-500 self-center"/>
                                <h1 className="self-center">Linear regression</h1>


                            </div>

                            <div className={`${selectedmodel === "Lasso" ? "bg-[#7C3AED]" : "bg-[#17182E]"} 
border-[#2A2D4F] flex  flex-1 hover:bg-[#1F2240] hover:border-[#7C3AED] transition-all duration-300 `}
                                 onClick={() => setselectedmodel("Lasso")}>
                                <BulletDot className="w-3 h-3 text-green-500 self-center"/>
                                <h1 className="self-center">Lasso regression</h1>
                            </div>

                            <div className={`${selectedmodel === "Ridge" ? "bg-[#7C3AED]" : "bg-[#17182E]"} 
  flex  flex-1  hover:bg-[#1F2240] hover:border-[#7C3AED] transition-all duration-300`}
                                 onClick={() => setselectedmodel("Ridge")}>
                                <BulletDot className="w-3 h-3 text-[#F97316] self-center"/>
                                <h1 className="self-center">Ridge Regression</h1>
                            </div>

                            <div className={`${selectedmodel === "RandomForest" ? "bg-[#7C3AED]" : "bg-[#17182E]"} 
border-[#2A2D4F] flex  flex-1  hover:bg-[#1F2240] hover:border-[#7C3AED] transition-all duration-300`}
                                 onClick={() => setselectedmodel("RandomForest")}>
                                <BulletDot className="w-3 h-3 text-[#EF4444] self-center"/>
                                <h1 className="self-center">RandomForest </h1>
                            </div>

                        </div>

                        <div className="xgboost-modell-list bg-[#7C3AED] flex gap-2 p-2 " onClick={() => setselectedmodel("XGBoost")}>
                            <Star className="w-4 h-4 text-white w-5 h-5"/>
                            <h1>XGBoost</h1>
                            <div className="bg-purple-300 w-fit pl-1 pr-1 rounded-xl">
                                Best
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="ModelsStats min-h-screen w-screen bg-[#0F1021] grid  grid-cols-1 lg:grid-cols-3 p-4 gap-2 auto-rows-fr">
                    <div
                        className="Rsquaregraph min-h-0 flex flex-col flex-1  p-2 bg-[#0F1220] border border-[#2A2D4F] rounded-2xl justify-center items-center text-white">
                        <h1>Train R² vs Test R ² Score</h1>
                        <TrainVsTestRsquare/>
                        <div className="flex gap-2">
                            <TrendUp className="w-5 h-5 text-purple-950"/>
                            <h1>Higher is better for both Train R² and Test R²</h1>
                        </div>
                    </div>

                    <div className="FeatureImportance flex flex-1 bg-[#0F1220] border border-[#2A2D4F] rounded-2xl text-white flex-col gap-2 p-4">
                        <h1>Top 10 Feature Importances ({selectedmodel})</h1>
                        {featuresdataloading ? <p>Loading Feature Importance Data</p> :
                            <ComparisonFeature data={featureImportance[selectedmodel]}/>}
                        <h1 className="self-center">Importance (%)</h1>


                    </div>

                    <div className="PriceVs flex flex-1 bg-[#0F1220] border border-[#2A2D4F] rounded-2xl text-white flex-col gap-2 p-4">
                        <h1>Acutal vs Predicted ({selectedmodel})</h1>
                        {loading ? <p>Loading Data</p> : <PriceComparison data={pricedata[selectedmodel]}/>}
                        <h1 className="self-center">Actual Price (₹)</h1>
                        <div className="bg-[#2A1D54] text-[#A78BFA] w-fit pl-2 pr-2 rounded-xl self-center ">
                            Closer to line=better prediction
                        </div>
                    </div>

                    <div className="ComparisonTable flex  bg-[#0F1220] p-4 flex-col justify-between border border-[#2A2D4F] rounded-2xl">
                        <h1 className="text-white text-xl sm:text-2xl">Model Comparison(Test Set)</h1>
                        {tabledataloading ? <p>Table Data Loading</p> : <TableComponent models={models}/>}

                    </div>

                    <div className="hyperparams flex flex-1 bg-red-500 border min-h-0 overflow-y-scroll border border-[#2A2D4F] rounded-2xl ">
                        <HyperParameter selectedModel={selectedmodel}/>
                    </div>

                    <div
                        className="Rsquaregraph flex  bg-[#0F1220] border border-[#2A2D4F] rounded-2xl text-xl sm:text-2xl text-[#7C3AED] flex-col justify-center items-center gap-2 sm:gap-4 ">
                        <h1>Why XGBoost is the winenr</h1>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-2 text-white self-start">
                                <CheckCircle className="w-10 h-10 text-green-400"/>
                                <h1> Highest Test R² Score (0.94)</h1>
                            </div>
                            <div className="flex gap-2  text-white  self-start ">
                                <CheckCircle className="w-10 h-10 text-green-400 "/>
                                <h1> Lowest MAE (₹91,985)</h1>
                            </div>
                            <div className="flex gap-2  text-white  self-start">
                                <CheckCircle className="w-10 h-10 text-green-400"/>
                                <h1>Smallest gap between Train and Test R²</h1>
                            </div>
                            <div className="flex gap-2  text-white  self-start">
                                <CheckCircle className="w-10 h-10 text-green-400"/>
                                <h1>Robust to overfitting</h1>
                            </div>
                            <div className="flex gap-2  text-white self-start ">
                                <CheckCircle className="w-10 h-10 text-green-400"/>
                                <h1>Handles non-linear relationships well</h1>
                            </div>
                            <div className="flex gap-2  text-white self-start ">
                                <CheckCircle className="w-10 h-10 text-green-400"/>
                                <div className="flex flex-col">
                                    <h1>Feature importance shows strong</h1>
                                    <h1>predictors are well captured</h1>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>

    )
}