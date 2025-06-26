import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
export default function CitySearch({ onSearch }) {
    const [cityInput, setCityInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = cityInput.trim();
        if(trimmed !== ""){
            onSearch(trimmed);
            setCityInput("");
        }
    };
    return (

        <form onSubmit={handleSubmit} className="mb-6 flex gap-2 relative">
            <div className="realtive w-full">
                <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                    type="text" 
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    placeholder="Digite uma cidade..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button 
                type="submit" 
                className="bg-zinc-600 px-4 py-2 rounded-lg text-white hover:bg-zinc-800 transition"
            >
                Buscar
            </button>
        </form>
        
    );
}