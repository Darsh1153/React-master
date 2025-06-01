import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }

        ]
    },

])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
