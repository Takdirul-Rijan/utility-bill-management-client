import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ScaleLoader } from "react-spinners";
import { HiMiniBars3 } from "react-icons/hi2";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged out successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((err) => console.error(err));
  };

  const activeClass = (isActive) =>
    isActive
      ? "text-white bg-indigo-600 px-3 py-2 rounded-md font-semibold"
      : "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md transition";

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ScaleLoader />
      </div>
    );
  }
  return (
    <header className="bg-lime-400 shadow-md py-3 sticky top-0 z-50">
      <nav className="w-11/12 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-500 flex items-center justify-center rounded-md text-white font-bold">
            SB
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Smart<span className="text-indigo-500">BillHub</span>
          </h1>
        </Link>

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <NavLink to="/" className={({ isActive }) => activeClass(isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-bills"
              className={({ isActive }) => activeClass(isActive)}
            >
              Bills
            </NavLink>
          </li>

          {!user ? (
            <>
              <li>
                <NavLink
                  to="/auth/login"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/auth/register"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/my-pay-bills"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  My Pay Bills
                </NavLink>
              </li>

              <li className="relative group">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/2N76qLN/default-avatar.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-indigo-500 cursor-pointer"
                />

                <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition">
                  {user?.displayName || user?.name || "User"}
                </span>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

        <div className="md:hidden">
          <details className="group relative">
            <summary className="text-3xl p-2 cursor-pointer text-gray-700 list-none">
              <HiMiniBars3 />
            </summary>
            <ul className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg p-2 space-y-1 w-40">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-bills"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Bills
                </NavLink>
              </li>

              {!user ? (
                <>
                  <li>
                    <NavLink
                      to="/auth/login"
                      className={({ isActive }) => activeClass(isActive)}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/auth/register"
                      className={({ isActive }) => activeClass(isActive)}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/my-pay-bills"
                      className={({ isActive }) => activeClass(isActive)}
                    >
                      My Pay Bills
                    </NavLink>
                  </li>
                  <li>
                    <img
                      className="w-10 h-10 rounded-full border-2 border-indigo-500"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/2N76qLN/default-avatar.png"
                      }
                      alt="User Avatar"
                      title={user?.displayName || user?.name || "User"}
                    />
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md transition w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
