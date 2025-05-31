import Filter from "../Components/Home/Filter"
import DataRender from "../Components/Home/DataRender"

export default function Home() {

  return (
    <>
      <main className="pb-[70px] flex items-start justify-center gap-[70px] flex-wrap">
        <div className="flex mt-[75px]! w-[100%] justify-between  max-sm:flex-col max-sm:gap-[20px]">
          <Filter />
        </div>
        <DataRender />
      </main >
    </>
  )
}
