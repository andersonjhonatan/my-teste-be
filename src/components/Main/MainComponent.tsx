import TableWebComponent from '../Table/TableWebComponent'
import SearchComponents from '../search/SearchComponents'

const MainComponent = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[calc(100vh-60px)] px-[32px] max-sm:px-[20px] flex flex-col ">
        <SearchComponents />
        <TableWebComponent />
      </div>
    </div>
  )
}

export default MainComponent
