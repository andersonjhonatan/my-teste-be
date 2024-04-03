import HeaderComponents from './components/header/HeaderComponents'
import MainComponent from './components/Main/MainComponent'
import { UserProvider } from './context/useContext'
import { FilteredUsersProvider } from './context/FilteredUsersContext'

function App() {
  return (
    <UserProvider>
      <FilteredUsersProvider>
        <HeaderComponents />
        <MainComponent />
      </FilteredUsersProvider>
    </UserProvider>
  )
}

export default App
