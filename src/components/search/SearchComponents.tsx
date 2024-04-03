const SearchComponents = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h4 className="text-[24px] pt-[104px] pb-[40px] leading-[28.13px] font-roboto font-medium text-[var(--secondary-color)]">
        Funcionários
      </h4>
      <div className="relative mt-[92px] mb-[32px] flex justify-between">
        <input
          type="text"
          className="w-[287px] h-[48px] py-3 px-4 border-[1px] border-[var(--tertiary-color-gray-2)] rounded-lg placeholder:font-roboto font-normal"
          placeholder="Pesquisar"
        />
        <img src="Vector.svg" alt="lupa" className="absolute  h-[24px] w-[24px] top-1/2 cursor-pointer transform -translate-y-1/2 right-4" />
      </div>
    </div>
  )
}

export default SearchComponents
