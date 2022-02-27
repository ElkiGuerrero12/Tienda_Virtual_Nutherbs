import "./NavBar.css";
import CartWidjet from "./CartWidget";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";
import React, { useContext } from "react";

function NavBar() {
  const { totalUnidades } = useContext(cartContext);

  return (
    <>
      <div className="header">
        <div className="header-section container">
          <NavLink to="/" className="logo">
            Nutherbs.com
          </NavLink>
          <ul className="ulNavbar">
            <li>
              <NavLink to="/category/salud natural">Salud Natural</NavLink>
            </li>
            <li>
              <NavLink to="/category/bajar de peso">Bajar de Peso</NavLink>
            </li>
            <li>
              <NavLink to="/category/energizantes">Energizantes</NavLink>
            </li>
          </ul>
          <li>
            <NavLink to="/cart">
              <CartWidjet />
              <span>{totalUnidades()}</span>
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
}

export default NavBar;
