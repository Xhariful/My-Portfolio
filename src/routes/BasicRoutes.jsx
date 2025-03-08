import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../layout/ClientLayout";
import HomePage from "../pages/homePages/HomePage";
import ContactUs from "../pages/contactPages/ContactUs";
import About from "../pages/aboutPages/About";
import Portfolio from "../pages/portfoliopages/Portfolio";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/portfolio',
                element: <div className="lg:ml-20 h-screen"><Portfolio/></div>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            },

        ]
    }
])

export default routes;