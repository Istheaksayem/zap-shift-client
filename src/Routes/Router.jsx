import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Error404 from "../Pages/Error404/Error404";
import AboutUs from "../Pages/AboutUs/AboutUs";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component:Home

            },
            {
                path:'coverage',
                Component:Coverage,
                loader:() =>fetch('/warehouses.json').then(res =>res.json())
            },
            {
                path:'/aboutUs',
                Component:AboutUs
            },
            {
                path:'/*',
                Component:Error404
            },
            
           
        ]
    },
]);