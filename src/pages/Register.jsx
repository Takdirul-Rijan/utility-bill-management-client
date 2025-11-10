import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } =
    use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            setUser(user);
          });
        Swal.fire({
          title: "Registration successful! Welcome to SmartBillHub!",
          icon: "success",
          draggable: true,
        });

        form.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Registration successful! Welcome to SmartBillHub!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <title>Register</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-bold text-xl text-center">Register Your Account</h2>
        <form onSubmit={handleRegister}>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                pattern="[A-Za-z\s]+"
                title="Please enter letters only"
                required
              />

              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo url"
                required
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Password must have at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long"
                  required
                />
                <button
                  type="button"
                  onClick={handleToggleShowPassword}
                  className=" btn-xs absolute top-3.5 right-7 "
                >
                  {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Register
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
          Already registered?{" "}
          <Link to={"/auth/login"} className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
