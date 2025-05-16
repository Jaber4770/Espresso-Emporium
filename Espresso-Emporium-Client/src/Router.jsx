import {
    createBrowserRouter,
} from "react-router";
import AddCoffee from "./Components/AddCoffee";
import UpdateCoffee from "./Components/UpdateCoffee";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import AddNewCoffee from "./Pages/AddNewCoffee";
import CoffeeDetails from "./Components/CoffeeDetails";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/addcoffee'),
                Component: Home
            },
            {
                path: 'addcoffee',
                Component: AddNewCoffee
            },
            {
                path: 'updatecoffee/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/addcoffee/${params.id}`),
                Component: UpdateCoffee
            },
            {
                path: 'coffeedetails/:id',
                loader: () => fetch('http://localhost:3000/addcoffee'),
                Component: CoffeeDetails
            },
            {
                path: 'signin',
                Component: SignIn
            },
            {
                path: 'signup',
                Component: SignUp
            }

        ]
    }
]);