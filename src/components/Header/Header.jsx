import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    // <nav className="header">
    //   <img src={logo} alt="" />
    //   <div>
    //     <Link to="/">Shop</Link>

    //     <Link to="/orders">Orders</Link>

    //     <Link to="/inventory">Inventory</Link>

    //     <Link to="/login">Login</Link>

    //     <Link to="/signUp">SignUp</Link>

    //     {user && (
    //       <span className="text-white">
    //         {user.email} <button onClick={handleLogOut}>Sign Out</button>
    //       </span>
    //     )}
    //   </div>
    // </nav>
    <div className="navbar bg-primary text-primary-content ">
      <div className="">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signUp">SignUp</Link>
              </li>
              <li>
                {user && <span className="text-black">{user.email}</span>}
              </li>
              <button onClick={handleLogOut}>Sign Out</button>
            </ul>
          </div>
        </div>

        <nav className="header">
          <img src={logo} alt="" />

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>

              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signUp">SignUp</Link>
              </li>
              <li>
                {user && <span className="text-white">{user.email}</span>}
              </li>
              <li>
                <button onClick={handleLogOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
