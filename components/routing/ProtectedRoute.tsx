import React from "react";
import type { NextPage } from "next";

import { Routes } from "../../constants";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

interface ProtectedRouteProps {
    router: any,
    children: React.ReactElement,
}


const ProtectedRoute: NextPage<ProtectedRouteProps> = ({ router, children }) => {
    //Identify authenticated user
    let auth;
    if (isBrowser()) {
        auth = localStorage.getItem("auth");
    }
    const isAuthenticated = auth === "true";

    let unprotectedRoutes = [
        Routes.LOGIN,
    ];

    /**
     * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
     */
    let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    if (isBrowser() && !isAuthenticated && pathIsProtected) {
        router.push(Routes.LOGIN);
    }

    return children;
};

export default ProtectedRoute;