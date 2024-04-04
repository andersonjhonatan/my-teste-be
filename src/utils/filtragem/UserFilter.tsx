/* cargo, nome e telefone */

import { IEmployeesData } from '../../types/TUser'

export const UserFilter = (users: IEmployeesData[], filter: string) => {
  const filteredUsers = users.filter((user) => {
    return (
      user.name.trim().toLowerCase().replace(/~/g, '').includes(filter.toLowerCase()) ||
      user.job.toLowerCase().replace(/-/g, '').includes(filter.toLowerCase()) ||
      user.phone.replace(/\s/g, '').replace(/\+/g, '').includes(filter.toLowerCase()) ||
      user.phone.replace(/\s/g, '').replace(/\+/g, '').includes(filter.replace(/\s/g, '').replace(/\+/g, ''))
    )
  })

  return filteredUsers
}
