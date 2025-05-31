import { useContext } from "react"
import { ThemeContext } from "../../pages/Layout"


export default function Filter() {

    const {toggle, setInputValue, setIsFocused, isFocused, selectedRegion, setSelectedRegion} = useContext(ThemeContext)

    const regionArr = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"]
    return (
        <>
            <label htmlFor="search" className={`shadow-[0_2px_4px_0_rgba(0,0,0,0.562)] max-lg:w-[300px]! flex pl-[32px]! items-center w-[480px] h-[56px] rounded-[5px] bg-[#2B3844] gap-[20px] ${toggle ? "bg-[#FFFFFF]" : undefined}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#FFFFFF" className={`${toggle ? "stroke-[#848484]" : undefined}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z" /></svg>
                <input type="text" name="" className={`outline-none text-[1.4rem] font-[400] leading-[20px] text-[#FFFFFF] ${toggle ? "text-[#848484] placeholder:text-[#848484]" : undefined}`} placeholder="Search for a country…" onChange={(e) => setInputValue(e.target.value)} id="search" />
            </label>
            <div className="shadow-[0_2px_4px_0_rgba(0,0,0,0.562)] relative flex gap-[24px] rounded-[5px]! items-center">
                <div onClick={() => setIsFocused(!isFocused)} className={`cursor-pointer flex justify-between w-[200px] h-[56px] bg-[#2B3844] p-[0_20px_0_20px] rounded-[10px]! items-center ${toggle ? "bg-[#FFFFFF]" : undefined}`}>
                    <button className={`text-[1.4rem] font-[400] ${toggle ? "text-[#111517]!" : undefined} leading-[20px] text-[#FFFFFF]`} >{selectedRegion ? selectedRegion : "Filter by Region"}</button>
                    <svg className={`cursor-pointer transition-[1s]   ${isFocused ? "rotate-180" : "rotate-0"}`} xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8"><path fill="none" stroke="#FFFFFF" className={`${toggle ? "stroke-[#111517]!" : undefined}`} strokeWidth="1.5" d="m1 1 6 6 6-6" /></svg>
                </div>
                <div className={`flex-col absolute p-[24px]! gap-[10px] top-[64px] bg-[#2B3844] rounded-[5px] shadow-[0_2px_9px_0_rgba(0,0,0,0.532)] w-[200px]! text-[1.4rem] font-[400] leading-[20px] text-[#FFFFFF] ${isFocused ? "flex" : "hidden"} `}>
                    {regionArr.map((e, index) => {
                        return <button key={index} onClick={() => {
                            setIsFocused(false)
                            setSelectedRegion(e)
                        }} className={`w-[100%] cursor-pointer text-left`}>{e}</button>
                    })}
                </div>
            </div>
        </>
    )
}
