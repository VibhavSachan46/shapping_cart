import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="https://www.logo.wine/logo/O_Shopping" />
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <p>home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar;

