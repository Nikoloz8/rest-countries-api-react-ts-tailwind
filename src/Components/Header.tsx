import { useContext } from "react"
import { ThemeContext } from "../pages/Layout"

export default function Header() {

    const { toggle, setToggle } = useContext(ThemeContext)


    return (
        <header className={`w-[100%] ${toggle ? "bg-[#FFFFFF]" : undefined} flex items-center shadow-[0_2px_4px_0_rgba(0,0,0,0.0562)] justify-center p-[22px] bg-[#2B3844]`}>
            <div className="flex justify-between w-[1280px]!">
                <h1 className={`font-[900] max-sm:text-[1.4rem] text-[2.4rem] text-[#FFFFFF] ${toggle ? "text-[#111517]!" : undefined}`}>Where in the world?</h1>
                <button onClick={() => setToggle(!toggle)} className={`flex gap-[10px] font-[600] text-[1.6rem] max-sm:text-[1.4rem]! cursor-pointer text-[#FFFFFF] items-center ${toggle ? "text-[#111517]!" : undefined}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 22 22"><path fill="#FFFFFF" className={`${toggle ? "fill-[#111517]! stroke-[#111517]!" : undefined}`} stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
                    Dark Mode
                </button>
            </div>
        </header>)
}