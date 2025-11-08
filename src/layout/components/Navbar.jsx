import { Link, NavLink } from "react-router";

const Navbar = () => {
  const activeClass = (isActive) =>
    isActive
      ? "text-white bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-md px-4 py-2 font-semibold shadow-sm"
      : "text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md transition-colors duration-200";

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => activeClass(isActive)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bills"
          className={({ isActive }) => activeClass(isActive)}
        >
          Bills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => activeClass(isActive)}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) => activeClass(isActive)}
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="py-3 sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 backdrop-blur-lg shadow-lg">
      <nav className="w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 12h18M12 3v18"
                />
              </svg>
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight drop-shadow">
              Utility<span className="text-yellow-300">Pay</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-3 list-none">
            {links}
          </ul>

          <div className="lg:hidden relative">
            <details className="group">
              <summary className="p-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 list-none [&::-webkit-details-marker]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <ul
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50 
                opacity-0 translate-y-1 transform transition-all duration-300 ease-out 
                group-open:opacity-100 group-open:translate-y-0"
              >
                {links}
              </ul>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
