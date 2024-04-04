import { useContext } from 'react'
import { UserContext } from '../../context/useContext'

const SearchComponents = () => {
  const { search, HandleOnSubmit, HandleChange } = useContext(UserContext)
  return (
    <div className="w-full fle max-sm:flex-col items-center justify-between">
      <h4 className="text-[24px] pt-[104px] max-sm:pt-[80px] pb-[40px] max-sm:pb-0 leading-[28.13px] font-roboto font-medium text-[var(--secondary-color)]">
        Funcionários
      </h4>
      <form onSubmit={HandleOnSubmit} className="w-full">
        <div className="relative mt-[92px] max-sm:mt-[28px] mb-[32px] max-sm:mb-[20px] flex justify-between">
          <input
            type="text"
            className="w-[287px] max-sm:w-full h-[48px] py-3 px-4 border-[1px] border-[var(--tertiary-color-gray-2)] rounded-lg placeholder:font-roboto font-normal"
            placeholder="Pesquisar"
            value={search || ''}
            onChange={HandleChange}
          />
          <button type="submit">
            <img
              src="Vector.svg"
              alt="lupa"
              className="absolute  h-[24px] w-[24px] top-1/2 cursor-pointer transform -translate-y-1/2 right-4"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchComponents
