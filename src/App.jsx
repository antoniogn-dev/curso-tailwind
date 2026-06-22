import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import TarjetaImanPage from "./pages/TarjetaIman"
import Navbar from "./components/Navbar"
import UserPage from "./pages/UserPage"
import TarjetaNeonPage from "./pages/TarjetaNeon"
import ResponsivoPage from "./pages/Responsivo"
import GridPage from "./pages/Grid"
import DarkPage from "./pages/Dark"
import TarjetaPage from "./pages/Tarjeta"

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/responsivo" element={<ResponsivoPage />} />
        <Route path="/grid" element={<GridPage />} />
        <Route path="/dark-mode" element={<DarkPage />} />
        <Route path="/tajeta-iman" element={<TarjetaImanPage />} />
        <Route path="/tajeta-neon" element={<TarjetaNeonPage />} />
        <Route path="/tajeta" element={<TarjetaPage />} />

        <Route path="/users/:id" element={<UserPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default App