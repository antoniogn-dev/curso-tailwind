import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-amber-950 text-amber-600 font-bold flex justify-center py-3 text-lg">
            <ul className="flex justify-between items-center">
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/responsivo" className={({ isActive }) => isActive ? "active" : ""}>Responsivo</NavLink>
                </li>
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/grid" className={({ isActive }) => isActive ? "active" : ""}>Grid</NavLink>
                </li>
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/dark-mode" className={({ isActive }) => isActive ? "active" : ""}>DarkMode</NavLink>
                </li>
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/tajeta-iman" className={({ isActive }) => isActive ? "active" : ""}>Tarjeta-Iman</NavLink>
                </li>
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/tajeta-neon" className={({ isActive }) => isActive ? "active" : ""}>Tarjeta-Neon</NavLink>
                </li>
                <li className="hover:text-amber-800 mx-4">
                    <NavLink to="/tajeta" className={({ isActive }) => isActive ? "active" : ""}>Tarjeta</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar