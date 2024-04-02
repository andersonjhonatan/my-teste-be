import { IUserData } from '../../types/TUser'
import UserImplemetation from '../Implematation/UserImplemetation'

class UserService {
  private userImplemation: UserImplemetation

  constructor(userImplemation: UserImplemetation) {
    this.userImplemation = userImplemation
  }
  async getAllUsers(): Promise<IUserData[]> {
    try {
      return await this.userImplemation.getAllUsers()
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default UserService