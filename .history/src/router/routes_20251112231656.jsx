import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddHabit from "../Pages/AddHabit/AddHabit"
import MyHabit from "../Pages/MyHabit/MyHabit"
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import PrivateRoute from "./PrivateRoute";
import ErrorLoading from "../components/ErrorLoading"
import AllHabits from "../Pages/AllHabits/AllHabits";
//import UpdateProfile from "../Pages/Profile/UpdateProfile";

//import ModelDetails from "../Pages/ModelDetails/ModelDetails";
//import UpdateModel from "../Pages/UpdateModel/UpdateModel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement:<ErrorLoading></ErrorLoading>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/6_habits"),
      },
      {
        path: "/all-habits",
        element: <AllHabits />,
        loader: () => fetch("http://localhost:3000/all_habits"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-habit",
        element: (
          <PrivateRoute>
            <AddHabit />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-habit",
        element: (
          <PrivateRoute>
            <MyHabit />
          </PrivateRoute>
        ),
      },
    //   {
    //     path: "/model-details/:id",
    //     element: (
    //       <PrivateRoute>
    //         <ModelDetails />
    //       </PrivateRoute>
    //     ),
    //     loader: ({ params }) =>
    //       fetch(`http://localhost:3000/models/${params.id}`),
    //   },

    //   {
    //     path: "/update-model/:id",
    //     element: (
    //       <PrivateRoute>
    //         <UpdateModel />
    //       </PrivateRoute>
    //     ),
    //     loader: ({ params }) =>
    //       fetch(`http://localhost:3000/models/${params.id}`),
    //   },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element:<ErrorLoading></ErrorLoading>
  }
]);
