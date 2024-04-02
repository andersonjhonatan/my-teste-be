import FuncionarioTableComponent from '../Table/FuncionarioTableComponent'
import SearchComponents from '../search/SearchComponents'

const MainComponent = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[calc(100vh-60px)]  border border-black pl-8 pr-[35px] flex flex-col ">
        <SearchComponents />

        <FuncionarioTableComponent />
      </div>
    </div>
  )
}

export default MainComponent
