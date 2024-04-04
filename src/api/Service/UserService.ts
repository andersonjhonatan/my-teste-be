import { IEmployeesData } from '../../types/TUser'
import UserImplemetation from '../Implematation/UserImplemetation'

class UserService {
  private userImplemation: UserImplemetation

  constructor(userImplemation: UserImplemetation) {
    this.userImplemation = userImplemation
  }
  async getAllUsers(): Promise<IEmployeesData[]> {
    try {
      return await this.userImplemation.getAllUsers()
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default UserService