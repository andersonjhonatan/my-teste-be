import LogoAzul from '../../../public/Fundo.svg'

const HeaderComponents = (): JSX.Element => {
  return (
    <div className="w-full bg-[var(--quaternary-color)] h-[60px] shadow-xl">
      <div className="w-full">
        <img
          src={LogoAzul}
          alt="logo-header"
          className="fixed top-[12.8px] left-8 w-11 h-[34px] bottom-[13.92px]"
        />
      </div>
    </div>
  )
}

export default HeaderComponents
