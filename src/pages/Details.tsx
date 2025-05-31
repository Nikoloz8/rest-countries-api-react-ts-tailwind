import { useNavigate, useParams } from "react-router-dom"
import data from "../../data.json"
import { useContext } from "react"
import { ThemeContext } from "./Layout"


export default function Details() {
  const { toggle } = useContext(ThemeContext)

  const H32 = `font-[600] text-[1.6rem] leading-[32px] text-[#FFFFFF] ${toggle ? "text-[#111517]!" : undefined}`


  const { name } = useParams()
  const country = data.find((country) => country.name.toLowerCase() === name)
  const navigate = useNavigate()

  return (
    <div className="mb-[60px]!">
      <div className="flex items-start mt-[50px]!">
        <button onClick={() => navigate("/home")} className="bg-[#2B3844] text-[#FFFFFF] text-[1.6rem] leading-[20px] font-[300] w-[140px] h-[40px] rounded-[6px]! flex items-center justify-center gap-[12px]">
          <svg fill="#FFFFFF" width="13px" height="13px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" /></svg>
          Back</button>
      </div>
      <div className="flex w-[100%] max-lg:flex-col justify-between mt-[50px]">
        <img src={country?.flag} className="max-lg:m-[0_0_50px_0] mr-[100px] max-h-[400px]! rounded-[10px]" alt="" />
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
              <h3 className={`${H32}`}>Languages: <span className={`${H32} font-[300]!`}>{country?.languages.map((e, index) => {
                if (index + 1 === country?.languages.length) return `${e.nativeName}`
                else return `${e.nativeName}, `
              })}</span></h3>
            </div>
          </div>
          <h3 className={`${H32} flex gap-[20px] items-center`}>
            Border Countries:
            <div className="flex gap-[20px] flex-wrap">
              {country?.borders?.map((e, index) => {
                const borderName = data.find(c => c.alpha3Code === e)?.name
                return <span key={index} className="flex items-center justify-center p-[0_20px_0_20px] h-[28px] bg-[#2B3844] text-[#FFFFFF] font-[300] text-[1.4rem] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] rounded-[2px]">{borderName}</span>
              })}
            </div>
          </h3>
        </div>
      </div>
    </div>
  )
}
