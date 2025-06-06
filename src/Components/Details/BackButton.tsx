import { useContext } from "react"
import { ThemeContext } from "../../layouts/Layout"

export default function BackButton() {

    const {navigate, toggle} = useContext(ThemeContext)

    return (
        <div className="flex items-start mt-[50px]!">
            <button onClick={() => navigate("/")} className={`bg-[#2B3844] cursor-pointer text-[#FFFFFF] text-[1.6rem] leading-[20px] font-[300] w-[140px] h-[40px] rounded-[6px]! flex items-center justify-center gap-[12px] ${toggle ? "bg-[#FFFFFF]! text-[#111517]!" : undefined}`}>
                <svg fill="#FFFFFF" width="13px" height="13px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className={`${toggle ? "fill-[#111517]!" : undefined}`}><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" /></svg>
                Back</button>
        </div>)
}
