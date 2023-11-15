import { Route, Routes } from "react-router-dom"
//import HomePage from "../pages/HomePage"
//import Componentes from "../pages/Componentes"
import Rubro from "../pages/Rubro"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/rubro' element={<Rubro/>}/>
    </Routes>
  )
}

export default AppRoutes