"use client"

import {useState} from "react"
import {useEffect} from "react";
import {
    Combobox,
    ComboboxInput,
    ComboboxContent,
    ComboboxList,
    ComboboxItem,
    ComboboxEmpty,
    ComboboxCollection,
} from "@/components/ui/combobox"

const testOptions = [
    {value: "maruti", label: "Maruti"},
    {value: "hyundai", label: "Hyundai"},
    {value: "tata", label: "Tata"},
]

export default function Normalform({setprediction}) {
    const [carvalue, setcarValue] = useState(null)
    const [modelvalue, setmodelValue] = useState(null)
    const [brand,setbrandValue] = useState(null)
    const [vehicleage, setvehicleage] = useState(null)
    const [km_driven, setkm_driven] = useState(null)
    const [fuelType, setfuelType] = useState("Petrol")
    const [OwnerType, setOwnerType] = useState(null)
    const [TransmissionType, setTransmissionType] = useState(null)
    const [engine,setengine]=useState(null)
    const [max_power,setmax_power] = useState(null)
    const [mileage,setmileage] = useState(null)

   // data  for combobox
    const [BrandOptions,setBrandOptions] = useState([])
    const [CarNameOptions,setCarNameOptions] = useState([])
    const [ModelOptions,setModelOptions] = useState([])


    useEffect(() => {
        async function fetchInitialData() {
            try {

                const brandRes = await fetch("http://127.0.0.1:5000/data-brand_names")
                const carRes = await fetch("http://127.0.0.1:5000/data-car_names")
                const modelRes=await fetch("http://127.0.0.1:5000/data-model_names")

                if (brandRes.ok) setBrandOptions(await brandRes.json())
                if (carRes.ok) setCarNameOptions(await carRes.json())
                if (modelRes.ok) setModelOptions(await modelRes.json())
            } catch (error) {
                console.error("Error loading initial dropdown data:", error)
            }
        }
        fetchInitialData()
    }, [])
    console.log(CarNameOptions)

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = {
            car_name: carvalue,
            brand: brand,
            model: modelvalue,
            vehicle_age: Number(vehicleage),
            km_driven: Number(km_driven),
            seller_type: OwnerType,
            fuel_type: fuelType,
            engine: Number(engine),
            max_power: Number(max_power),
            mileage: Number(mileage),
            transmission_type: TransmissionType,
        };

        try {
            const res = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                const result = await res.json();
                setprediction(result)
            } else {
                alert("Failed to get prediction from the server.");
            }
        } catch (err) {
            console.error("Error fetching price prediction:", err);
            alert("An error occurred while connecting to the server.");
        } finally {
            setLoading(false);
        }

    }




    return (

        <div className="w-full max-h-screen no-scrollbar overflow-y-auto">
            <form   onSubmit={handleSubmit}  className="flex flex-col gap-4 sm:gap-8 overflow-y-auto">

                {/* All  Comboboxes and inputs */}
                <Combobox items={CarNameOptions} value={carvalue} onValueChange={setcarValue}>
                    <ComboboxInput placeholder="Select brand..." className="p-6"/>
                    <ComboboxContent>
                        <ComboboxEmpty>No results found.</ComboboxEmpty>
                        <ComboboxList>
                            <ComboboxCollection>
                                {(item) => (
                                    <ComboboxItem key={item.value} value={item.value}>
                                        {item.label}
                                    </ComboboxItem>
                                )}
                            </ComboboxCollection>
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox items={BrandOptions} value={brand} onValueChange={setbrandValue}>
                    <ComboboxInput placeholder="Select brand..." className="p-6"/>
                    <ComboboxContent>
                        <ComboboxEmpty>No results found.</ComboboxEmpty>
                        <ComboboxList>
                            <ComboboxCollection>
                                {(item) => (
                                    <ComboboxItem key={item.value} value={item.value}>
                                        {item.label}
                                    </ComboboxItem>
                                )}
                            </ComboboxCollection>
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox items={ModelOptions} value={modelvalue} onValueChange={setmodelValue}>
                    <ComboboxInput placeholder="Select  model..." className="p-6"/>
                    <ComboboxContent>
                        <ComboboxEmpty>No results found.</ComboboxEmpty>
                        <ComboboxList>
                            <ComboboxCollection>
                                {(item) => (
                                    <ComboboxItem key={item.value} value={item.value}>
                                        {item.label}
                                    </ComboboxItem>
                                )}
                            </ComboboxCollection>
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <div className="w-full flex  gap-4 justify-between">
                    <div className=" flex-1 flex flex-col gap-4">
                        <h1>Vehicle Age</h1>
                        <input name="vehicle_age"     value={vehicleage}
                               onChange={(e) => setvehicleage(e.target.value)}  type="number" min="0" max="100" step="1" className="p-3 border"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h1>KM</h1>
                        <input name="km_driven"    value={km_driven}
                               onChange={(e) => setkm_driven(e.target.value)}type="number" min="0" max="10000000" step="1" className="p-3 border"/>
                    </div>

                </div>

                <select className="p-4 border " value={fuelType}
                        onChange={(e) => setfuelType(e.target.value)}>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                    <option value="LPG">LPG</option>
                    <option value="Electric">Electric</option>
                </select>


                <div className="w-full flex  gap-4 justify-between">
                    <div className=" flex-1 flex flex-col gap-4">
                        <h1>Transmission</h1>
                        <select className="p-4 border"   value={TransmissionType}
                                onChange={(e) => setTransmissionType(e.target.value)}>
                            <option value="Manul">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </select>
                    </div>

                    <div className=" flex-1 flex flex-col gap-4">
                        <h1>
                            Owner Type
                        </h1>
                        <select className="p-4 border"   value={OwnerType}
                                onChange={(e) => setOwnerType(e.target.value)}>
                            <option value="Individual">Individual</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Trustmark Dealer">Trustmark Dealer</option>
                        </select>
                    </div>

                </div>

                <div className="w-full flex  gap-4 justify-between">
                    <div className=" flex-1 flex flex-col gap-4">
                        <h1>Engine CC</h1>
                        <input type="number"   value={engine}
                               onChange={(e) => setengine(e.target.value)}min="0" max="10000" step="1" className="p-3 border"/>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <h1>Max Power</h1>
                        <input type="number"  value={max_power}
                               onChange={(e) => setmax_power(e.target.value)} min="0" max="10000000" step="1" className="p-3 border"/>
                    </div>

                </div>


                <div>
                    <h1>Mileage</h1>
                    <input type="number"  value={mileage}
                           onChange={(e) => setmileage(e.target.value)}min="0" max="5000" step="1" className="p-3 border w-full"/>
                </div>




                <button
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded-md"
                >
                    Predict Price
                </button>

            </form>

        </div>
    )
}