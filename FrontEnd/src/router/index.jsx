import {createBrowserRouter} from "react-router-dom";
import Landing from "../components/Landing Page/Landing";
import NotFound from "../components/NotFound/NotFound";
//import Layout from "../Components/Layouts/Layout";
export  const router = createBrowserRouter([


            {
                path: "/",
                element: <Landing />

            },
            {
                path: "*",
                element: <NotFound />,

            }



])
