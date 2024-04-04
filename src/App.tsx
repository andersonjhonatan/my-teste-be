import HeaderComponents from './components/header/HeaderComponents'
import MainComponent from './components/Main/MainComponent'
import { UserProvider } from './context/useContext'

function App() {
  return (
    <UserProvider>
        <HeaderComponents />
        <MainComponent />
    </UserProvider>
  )
}

export default App
