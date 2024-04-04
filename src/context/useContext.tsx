import {
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { IEmployeesData } from '../types/TUser'
import UserImplemetation from '../api/Implematation/UserImplemetation'
import UserService from '../api/Service/UserService'

interface UserContextType {
  search: string
  users: IEmployeesData[]
  setUsers: Dispatch<SetStateAction<IEmployeesData[]>>
  HandleOnSubmit: FormEventHandler<HTMLFormElement>
  HandleChange: ChangeEventHandler<HTMLInputElement>
  openModal: () => void
  open: boolean
}

const initialUserContext: UserContextType = {
  users: [],
  setUsers: () => {},
  HandleOnSubmit: () => {},
  HandleChange: () => {},
  search: '',
  openModal: () => {},
  open: false,
}

export const UserContext = createContext<UserContextType>(initialUserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<IEmployeesData[]>([])
  const [open, setOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    async function getAllUsers() {
      const userImpleation = new UserImplemetation()
      const userService = new UserService(userImpleation)
      const response = await userService.getAllUsers()

      setUsers(response)
    }
    getAllUsers()
  }, [])

  const HandleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  const HandleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setSearch(value)
  }

  const openModal = () => {
    setOpen(!open)
  }

  return (
    <UserContext.Provider
      value={{ users, setUsers, HandleOnSubmit, HandleChange, search, openModal, open }}
    >
      {children}
    </UserContext.Provider>
  )
}
