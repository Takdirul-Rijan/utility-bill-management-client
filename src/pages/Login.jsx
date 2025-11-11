import { use, useState } from "react";
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

  return (
    <div className="flex justify-center min-h-screen items-center">
      <title>Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-xl text-center">Login Your Account</h2>
        <form onSubmit={handleLogIn}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
                value={emailPrefill}
                onChange={(e) => setEmailPrefill(e.target.value)}
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={handleToggleShowPassword}
                  className=" btn-xs absolute top-3.5 right-7 "
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <Link
                to="/auth/forgot-password"
                state={{ email: emailPrefill }}
                className="link link-hover"
              >
                Forgot password?
              </Link>

              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-secondary btn-outline w-[336px]"
          >
            <FcGoogle size={20} /> Login with Google
          </button>
        </div>
        <p className="pt-5 text-center font-semibold">
          New to our platform?{" "}
          <Link
            to={"/auth/register"}
            state={{ from: location.state?.from || "/" }}
            className="text-blue-400"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
