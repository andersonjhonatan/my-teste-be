import { IEmployeesData } from '../../types/TUser'

export interface IUserRepository {
  getAllUsers: () => Promise<IEmployeesData[]>
}
