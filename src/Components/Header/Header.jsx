import {NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
           
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to='/Login' className="btn">Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
