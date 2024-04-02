import { useEffect, useState } from 'react'
import { IUserData } from '../../types/TUser'
import UserService from '../../api/Service/UserService'
import UserImplemetation from '../../api/Implematation/UserImplemetation'

const GetUSers = () => {
  const [users, setUsers] = useState<IUserData[]>([])

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
    users
  }
}

const FuncionarioTableComponent = () => {
  const { users } = GetUSers()
  console.log(users)
  return (
    <div>
      <div>
        <table>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Data de Admissão</th>
            <th>Telefone</th>
          </tr>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>CPF</td>
              <td>Saldo</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FuncionarioTableComponent
