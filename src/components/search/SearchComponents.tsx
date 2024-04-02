const SearchComponents = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-[24px] pt-[44px] pb-[40px]  font-bold leading-[28.13px]">
        Funcionários
      </h1>
      <div className="relative my-8">
        <input
          type="text"
          className="w-[287px] py-3 px-4 border-[1px] border-[var(--tertiary-color-gray-2)] rounded-lg"
          placeholder="Pesquisar"
        />
        <img src="Vector.svg" alt="lupa" className="absolute  h-[17.49px] w-[17.49px] top-1/2  transform -translate-y-1/2 right-4" />
      </div>
    </div>
  )
}

export default SearchComponents
