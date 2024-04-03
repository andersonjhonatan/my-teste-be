import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IEmployeesData } from '../types/TUser';

interface FilteredUsersContextType {
  filteredUsers: IEmployeesData[];
  setFilteredUsers: Dispatch<SetStateAction<IEmployeesData[]>>;
}

export const FilteredUsersContext = createContext<FilteredUsersContextType>({
  filteredUsers: [],
  setFilteredUsers: () => {},
});

export const FilteredUsersProvider= ({ children }: { children: React.ReactNode }) => {
  const [filteredUsers, setFilteredUsers] = useState<IEmployeesData[]>([]);

  return (
    <FilteredUsersContext.Provider value={{ filteredUsers, setFilteredUsers }}>
      {children}
    </FilteredUsersContext.Provider>
  );
};