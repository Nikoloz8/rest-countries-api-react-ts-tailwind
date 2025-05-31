import { useContext } from "react"
import { ThemeContext } from "../../pages/Layout"
import data from "../../../data.json"
import { useParams } from "react-router-dom"

export default function RenderInfo() {

    const { toggle } = useContext(ThemeContext)

    const { name } = useParams()
    const country = data.find((country) => country.name.toLowerCase() === name)

    const H32 = `font-[600] text-[1.6rem] leading-[32px] text-[#FFFFFF] ${toggle ? "text-[#111517]!" : undefined}`

    return (
        <div className="flex flex-col gap-[32px]">
            <h2 className="font-[900] text-[3.2rem] text-[#FFFFFF]">{country?.name}</h2>
            <div className="flex max-xl:flex-col max-xl:items-start max-xl:gap-[32px] items-center">
                <div className="mr-[50px]">
                    <h3 className={`${H32}`}>Native Name: <span className={`${H32} font-[300]!`}>{country?.nativeName}</span></h3>
                    <h3 className={`${H32}`}>Population  : <span className={`${H32} font-[300]!`}>{country?.population.toLocaleString()}</span></h3>
                    <h3 className={`${H32}`}>Region: <span className={`${H32} font-[300]!`}>{country?.region}</span></h3>
                    <h3 className={`${H32}`}>Sub Region: <span className={`${H32} font-[300]!`}>{country?.subregion}</span></h3>
                    <h3 className={`${H32}`}>Capital: <span className={`${H32} font-[300]!`}>{country?.capital}</span></h3>
                </div>
                <div>
                    <h3 className={`${H32}`}>Top Level Domain: <span className={`${H32} font-[300]!`}>{country?.topLevelDomain}</span></h3>
                    <h3 className={`${H32}`}>Currencies: <span className={`${H32} font-[300]!`}>{country?.currencies ? country?.currencies[0].name : undefined}</span></h3>
                    <h3 className={`${H32}`}>Languages: <span className={`${H32} font-[300]!`}>{country?.languages?.map((e, index) => {
                        if (index + 1 === country?.languages?.length) return `${e.nativeName}`
                        else return `${e.nativeName}, `
                    })}</span></h3>
                </div>
            </div>
            <h3 className={`${H32} flex gap-[20px] items-center`}>
                Border Countries:
                <div className="flex gap-[20px] flex-wrap">
                    {country?.borders?.map((e, index) => {
                        const borderName = data.find(c => c.alpha3Code === e)?.name
                        return <span key={index} className={`flex items-center justify-center p-[0_20px_0_20px] h-[28px] bg-[#2B3844] text-[#FFFFFF] font-[300] text-[1.4rem] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] rounded-[2px] ${toggle ? "text-[#111517]! bg-[#FFFFFF]" : undefined}`}>{borderName}</span>
                    })}
                </div>
            </h3>
        </div>)
}
