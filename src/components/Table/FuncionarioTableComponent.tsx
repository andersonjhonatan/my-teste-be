import { useEffect, useState } from 'react'
import { IEmployeesData } from '../../types/TUser'
import UserService from '../../api/Service/UserService'
import UserImplemetation from '../../api/Implematation/UserImplemetation'

const GetUSers = () => {
  const [users, setUsers] = useState<IEmployeesData[]>([])

  const dataDeAdmissaoFormatada = (data: string) => {
    const date = new Date(data)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const phoneFormat = (phone: string): string => {
    const phoneFormatado = phone
      .replace(/\D/g, '')
      .replace(/^(\d{0, 2})(\d{5})(\d{4})/, '($1) $2-$3')

    const phoneFormatted = `+${phoneFormatado.slice(0, 2)} (${phoneFormatado.slice(
      2,
      4
    )}) ${phoneFormatado.slice(4, 9)}-${phoneFormatado.slice(9)}`

    return phoneFormatted
  }

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
    dataDeAdmissaoFormatada,
    phoneFormat,
  }
}

const FuncionarioTableComponent = () => {
  const { users, dataDeAdmissaoFormatada, phoneFormat } = GetUSers()
  return (
    <div className="w-full">
      <div className="w-full flex justify-center ">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-t from-[var(--primary-color)] to-[var(--quintary-color)]  text-[var(--quaternary-color)] text-justify font-roboto font-medium ">
              <th className="font-roboto font-medium text-base leading-[18.75px] rounded-tl-lg pl-[32px] h-[47px] py-[14px] ">
                FOTO
              </th>
              <th className='font-roboto font-medium py-[14px] '>NOME</th>
              <th className='font-roboto font-medium py-[14px] '>CARGO</th>
              <th className='font-roboto font-medium py-[14px] '>DATA DE ADMISSÃO</th>
              <th className="rounded-tr-lg font-roboto font-medium py-[14px] ">TELEFONE</th>
            </tr>
          </thead>
          <tbody className="text-justify bg-[var(--quaternary-color)]">
            {users.map((user) => (
              <tr key={user.id} className="text-justify border-b">
                <td className="pl-[32px] pt-[8px] pb-[7px] h-[49px]">
                  <img
                    src={user.image}
                    alt="user"
                    className="w-[34px] h-[34px] object-cover rounded-full "
                  />
                </td>
                <td className='font-roboto font-normal'>{user.name}</td>
                <td className='font-roboto font-normal'>{user.job}</td>
                <td className='font-roboto font-normal'>{dataDeAdmissaoFormatada(user.admission_date)}</td>
                <td className='font-roboto font-normal'>{phoneFormat(user.phone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FuncionarioTableComponent
