import { lazy } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFound from "./components/notFound";
const Page = lazy(() => import('./pages/page'));

const wwwRoutes = [
    {
        path: "/",
        element: <Page />,
    },
    {
        path: "*",
        element: <NotFound />
    }
];

const customRoutes = (subDomain?: string) => [
    {
        path: "/",
        element: <div>{subDomain}</div>,
    },
    {
        path: "*",
        element: <NotFound />
    }
]

const router = (subDomain?: string) => createBrowserRouter([
    ...subDomain ? [
        ...subDomain === "www" ? wwwRoutes : customRoutes(subDomain),
    ] : wwwRoutes,
]);

export default function MainRouter() {
    const hostname = window.location.hostname;
    const subDomain = hostname.split('.')[0] !== 'localhost'
        ? hostname.split('.')[0]
        : undefined;

    return <RouterProvider router={router(subDomain)} />
}
