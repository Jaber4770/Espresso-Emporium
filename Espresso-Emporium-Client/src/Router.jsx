import {
    createBrowserRouter,
} from "react-router";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import AddNewCoffee from "./Pages/AddNewCoffee";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/addcoffee',
                Component: AddNewCoffee
            },
            {
                path: '/updatecoffee',
                Component: UpdateCoffee
            }

        ]
    }
]);