import './App.css'
import NavBar from './component/NavBar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
