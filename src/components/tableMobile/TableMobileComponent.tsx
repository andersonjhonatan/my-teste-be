import { useContext } from 'react'
import { UserContext } from '../../context/useContext'
import { UserFilter } from '../../utils/filtragem/UserFilter'

const TableMobileComponent = () => {
  const { users, search } = useContext(UserContext)

  const renderfilter = UserFilter(users, search)

  return (
    <div className="w-full sm:hidden">
      <div className="w-full flex justify-center ">
        <table className="w-full">
          <thead >
            <tr className="bg-gradient-to-t from-[var(--primary-color)] to-[var(--quintary-color)]  text-[var(--quaternary-color)] text-justify font-roboto font-medium rounded-tr-lg">
              <th className="font-roboto font-medium text-base leading-[18.75px] rounded-tl-lg pl-[32px] h-[47px] py-[14px] ">
                FOTO
              </th>
              <th className="font-roboto font-medium py-[14px] ">NOME</th>
              <th className="rounded-tr-lg font-roboto font-medium  sm:hidden">
                <img src="Ellipse.svg" alt="elipse" className='pl-[0.6rem]' />
              </th>
            </tr>
          </thead>
          <tbody className="text-justify bg-[var(--quaternary-color)]">
            {renderfilter.map((user) => (
              <tr key={user.id} className="text-justify border-b">
                <td className="pl-[32px] pt-[8px] pb-[7px] h-[49px]">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-[34px] h-[34px] object-cover rounded-full "
                  />
                </td>
                <td className="font-roboto font-normal text-base">{user.name}</td>

                <td className="sm:hidden">
                  <img src="arrowDown.svg" alt="arrow-Down" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableMobileComponent
