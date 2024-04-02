import { useEffect, useState } from 'react'
import { IEmployeesData } from '../../types/TUser'
import UserService from '../../api/Service/UserService'
import UserImplemetation from '../../api/Implematation/UserImplemetation'

const GetUSers = () => {
  const [users, setUsers] = useState<IEmployeesData[]>([])

  useEffect(() => {
    async function getAllUsers() {
      const userImpleation = new UserImplemetation()
      const userService = new UserService(userImpleation)
      const response = await userService.getAllUsers()

      setUsers(response)
    }
    getAllUsers()
  }, [])

  return {
    users,
  }
}

const FuncionarioTableComponent = () => {
  const { users } = GetUSers()
  return (
    <div className="w-full">
      <div className="w-full flex justify-center ">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-t from-[#594ed2] to-[#5A84C0]  text-[var(--quaternary-color)] text-justify">
              <th className="text-base leading-[18.75px] py-[14px] rounded-tl-lg pl-[32px]">
                FOTO
              </th>
              <th>NOME</th>
              <th>CARGO</th>
              <th>DATA DE ADMISSÃO</th>
              <th className="rounded-tr-lg">TELEFONE</th>
            </tr>
          </thead>
          <tbody className="text-justify bg-[var(--quaternary-color)]">
            {users.map((user) => (
              <tr key={user.id} className="text-justify border-b">
                <td className="pl-[32px]  pt-[8px] pb-[7px]">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-[50px] h-[50px] object-container rounded-full "
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>{user.admission_date}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FuncionarioTableComponent
