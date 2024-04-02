import { AxiosResponse } from 'axios'
import { axiosInstance } from '../../axios/axiosInstance'
import { IUserRepository } from '../Repository/UserRepository'
import { IEmployeesData } from '../../types/TUser'

class UserImplemetation implements IUserRepository {
  async getAllUsers(): Promise<IEmployeesData[]> {
    try {
      const response: AxiosResponse = await axiosInstance.get('/employees')
      console.log(response)

      if (!response) {
        throw new Error('Algo deu errado')
      }

      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default UserImplemetation
