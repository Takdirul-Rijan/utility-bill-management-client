import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import BillDetails from "../pages/BillDetails";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllBills from "../pages/AllBills";
import MyPayBills from "../pages/MyPayBills";
import Error from "../pages/Error";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/all-bills",
        element: <AllBills></AllBills>,
      },
      {
        path: "/my-pay-bills",
        element: (
          <PrivateRoute>
            <MyPayBills></MyPayBills>,
          </PrivateRoute>
        ),
      },
      {
        path: "/bill-details/:id",
        element: (
          <PrivateRoute>
            <BillDetails></BillDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://smart-bill-hub-server.vercel.app/bills/${params.id}`),
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
export default router;
