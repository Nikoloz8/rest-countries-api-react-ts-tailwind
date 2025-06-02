import { useContext } from "react"
import data from "../../../data.json"
import { ThemeContext } from "../../layouts/Layout"
import tailwind from "../../shared/tailwind"

export default function DataRender() {

    const { H3 } = tailwind()
    const { selectedRegion, inputValue, toggle, navigate } = useContext(ThemeContext)

    return (
        data.filter((e) => {
            const matchesName = e.name.toLowerCase().includes(inputValue.toLowerCase())
            const matchesRegion = selectedRegion === "All" || selectedRegion === ""
                ? true
                : e.region === selectedRegion
            return matchesName && matchesRegion

        }).map((e, index) => {
            return <div key={index} onClick={() => navigate(`/details/${e.name.toLowerCase()}`)} className={`bg-[#2B3844] shadow-[0_0_7px_2px_rgba(0,0,0,0.0294)] max-sm:w-[300px]! w-[264px] h-[336px] rounded-[5px] ${toggle ? "bg-[#FFFFFF]!" : undefined}`}>
                <img className="w-[100%] rounded-t-[5px] h-[48%]" src={e.flags.png} alt="" />
                <div className="p-[24px]">
                    <h2 className={`mb-[16px]! font-[900] text-[1.8rem] leading-[26px] text-[#FFFFFF] ${toggle ? "text-[#111517]!" : undefined}`}>{e.name}</h2>
                    <div className="flex flex-col gap-[8px]">
                        <h3 className={`${H3} ${toggle ? "text-[#111517]!" : undefined}`}>Population: <span className={`${H3} font-[300]! ${toggle ? "text-[#111517]!" : undefined}`}>{e.population.toLocaleString()}</span></h3>
                        <h3 className={`${H3} ${toggle ? "text-[#111517]!" : undefined}`}>Region: <span className={`${H3} font-[300]! ${toggle ? "text-[#111517]!" : undefined}`}>{e.region}</span></h3>
                        <h3 className={`${H3} ${toggle ? "text-[#111517]!" : undefined}`}>Capital: <span className={`${H3} font-[300]! ${toggle ? "text-[#111517]!" : undefined}`}>{e.capital}</span></h3>
                    </div>
                </div>
            </div>
        })
    )
}
