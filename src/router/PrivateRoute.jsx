import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { RotateLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <RotateLoader />
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
