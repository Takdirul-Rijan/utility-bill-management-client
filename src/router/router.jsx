import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import BillDetails from "../pages/BillDetails";

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
        path: "/bill-details/:id",
        element: <BillDetails></BillDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bills/${params.id}`),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);
export default router;
