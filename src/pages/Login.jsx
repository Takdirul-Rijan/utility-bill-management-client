import { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle } = use(AuthContext);

  const [emailPrefill, setEmailPrefill] = useState("");

  const location = useLocation();
  // console.log("location", location);

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        navigate(from, { replace: true });

        Swal.fire({
          title: "Logged in successfully",
          icon: "success",
          draggable: true,
        });
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Invalid email or password",
          footer:
            '<span style="color:#d33">Please check your email and password.</span>',
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // setUser(user);
        Swal.fire({
          title: "You have successfully logged in! Welcome to SmartBillHub!",
          icon: "success",
          draggable: true,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-md">
        <h2 className="font-bold text-3xl text-center text-blue-700 dark:text-blue-400">
          Login to SmartBillHub
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleLogIn}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your email"
                required
                value={emailPrefill}
                onChange={(e) => setEmailPrefill(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={handleToggleShowPassword}
                  className="absolute top-3 right-4 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                state={{ email: emailPrefill }}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-2">
          <div className="h-[1px] bg-gray-300 w-1/4"></div>
          <p className="text-sm text-gray-500 dark:text-gray-400">or</p>
          <div className="h-[1px] bg-gray-300 w-1/4"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition font-semibold text-gray-700 dark:text-gray-200"
        >
          <FcGoogle size={20} /> Login with Google
        </button>

        <p className="text-center text-gray-700 dark:text-gray-300 font-medium pt-3">
          New to our platform?{" "}
          <Link
            to={"/auth/register"}
            state={{ from: location.state?.from || "/" }}
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
