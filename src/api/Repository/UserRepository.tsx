import { IUserData } from '../../types/TUser'

export interface IUserRepository {
  getAllUsers: () => Promise<IUserData[]>
}
