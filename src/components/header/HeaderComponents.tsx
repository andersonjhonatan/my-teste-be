import LogoAzul from '/Fundo.svg'

const HeaderComponents = (): JSX.Element => {
  return (
    <div className="w-screen bg-[var(--quaternary-color)] h-[60px] shadow-xl fixed z-50">
      <div className="w-full">
        <img
          src={LogoAzul}
          alt="logo-header"
          className="absolute top-[12.08px] left-[20px] sm:left-[32px] w-11 h-[34px] bottom-[13.92px] max-sm:w-[41.27px] max-sm:h-[33.97px]"
        />
      </div>
    </div>
  )
}

export default HeaderComponents
