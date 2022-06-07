import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Routes } from "../../constants";
import { FullPageLoader } from "../layout";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

interface ProtectedRouteProps {
    children: React.ReactElement,
}

const ProtectedRoute: NextPage<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const handleAuth = () => {
        let auth;
        if (isBrowser()) {
            auth = localStorage.getItem("auth");
        }
        return auth === "true";
    }
    
    let protectedRoutes = [
        Routes.DASHBOARD,
        Routes.STATISTICS,
        Routes.CATEGORIES,
        Routes.PROFILE,
        Routes.CONFIGURATION,
        Routes.HELPCENTER,
        Routes.GETTINGSTARTED,
        Routes.FAQ
    ];
    
    let pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

    useEffect(() => {
        handleAuth();
        setIsLoading(false)
        if (!isLoading && isBrowser() && !handleAuth() && pathIsProtected) {
            router.push(Routes.LOGIN);
        }
    }, [pathIsProtected, router, isLoading]);
    
    if ((isLoading || !handleAuth()) && pathIsProtected) {
        return <FullPageLoader/>
    }

    return children;
};

export default ProtectedRoute;