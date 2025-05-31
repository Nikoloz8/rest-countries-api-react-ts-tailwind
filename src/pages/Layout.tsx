import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header";

export const ThemeContext = createContext<ThemeContextType>({
    toggle: false,
    setToggle: () => { },
})

export default function Layout() {
    const navigate = useNavigate()

    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        navigate("/home")
    }, [])


    return (
        <ThemeContext.Provider value={{ toggle, setToggle }}>
            <div className={`w-[100%] ${toggle? "bg-[#FAFAFA]" : undefined} min-h-[100vh] flex flex-col items-center h-[100%] bg-[#202C36]`}>
                <Header toggle={toggle} setToggle={setToggle} />
                <div className="w-[1280px]! max-md:p-[0_30px_0_30px] max-xl:p-[0_50px_0_50px] max-2xl:p-[0_100px_0_100px] max-2xl:w-[100%]!">
                    <Outlet />
                </div>
            </div >
        </ThemeContext.Provider >


    )
}
