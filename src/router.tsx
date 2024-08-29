import { lazy } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NotFound from "./components/common/notFound";
const Page = lazy(() => import('./pages/page'));
const SigninPage = lazy(() => import('./pages/signin/page'));

const wwwRoutes = [
    {
        path: "/",
        element: <Page />,
    },
    {
        path: "/signin",
        element: <SigninPage />,
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

const exceptions = ['localhost', 'www'];

export default function MainRouter() {
    const subDomain = window.location.hostname.split('.')[0];

    return <RouterProvider router={router(
        !exceptions.includes(subDomain)
            ? subDomain
            : undefined
    )} />
}
