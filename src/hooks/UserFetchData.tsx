import { useEffect, useState } from 'react'
import { IEmployeesData } from '../types/TUser'
import UserImplemetation from '../api/Implematation/UserImplemetation'
import UserService from '../api/Service/UserService'
import {
  dataAdmissaoFormatada,
  phoneFormat,
} from '../utils/formatadores/UserFormatadores'

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
    dataAdmissaoFormatada,
    phoneFormat,
  }
}

export default GetUSers
