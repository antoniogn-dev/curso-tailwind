import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import TarjetaImanPage from "./pages/TarjetaIman"
import Navbar from "./components/Navbar"
import UserPage from "./pages/UserPage"
import TarjetaNeonPage from "./pages/TarjetaNeon"
import ResponsivoPage from "./pages/Responsivo"

const App = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/responsivo" element={<ResponsivoPage />} />
        <Route path="/tajeta-iman" element={<TarjetaImanPage />} />
        <Route path="/tajeta-neon" element={<TarjetaNeonPage />} />

        <Route path="/users/:id" element={<UserPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  )
}

export default App