import { useParams } from "react-router-dom"
import data from "../../data.json"
import BackButton from "../Components/Details/BackButton"
import RenderInfo from "../Components/Details/RenderInfo"


export default function Details() {

  const { name } = useParams()
  const country = data.find((country) => country.name.toLowerCase() === name)

  return (
    <div className="mb-[60px]!">
      <BackButton />
      <div className="flex w-[100%] max-lg:flex-col justify-between mt-[50px]">
        <img src={country?.flag} className="max-lg:m-[0_0_50px_0] mr-[100px] max-h-[400px]! rounded-[10px]" alt="" />
        <RenderInfo />
      </div>
    </div>
  )
}
