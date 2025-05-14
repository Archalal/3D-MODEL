
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import ViewPage from './Pages/ViewPage'
import OverView from './Component/OverView'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} >
      <Route index element={<OverView />} />
      <Route element={<ViewPage />} path='/viewModel' />
      </Route>
    </Routes>
  
      
    </>
  )
}

export default App
