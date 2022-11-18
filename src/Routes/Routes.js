import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Details from "../Components/DataisPage/Details";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Faq from "../Components/Faq/Faq";
import Checkout from "../Components/Checkout/Checkout";
import ErrorPage from "../Components/Error/ErrorPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://learn-skill-with-practice-server.vercel.app/courses`)
            },

            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://learn-skill-with-practice-server.vercel.app/details/${params.id}`),
                element: <Details></Details>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://learn-skill-with-practice-server.vercel.app/checkout/${params.id}`),
                element: <PrivateRoute> <Checkout /></PrivateRoute>
            },




        ]
    },


])