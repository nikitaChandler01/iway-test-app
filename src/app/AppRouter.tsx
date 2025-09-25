import { useAuthStore } from "@entities/user";
import { SignIn } from "@pages/SignIn";
import { apiService } from "@shared/api/api";
import { useLayoutEffect } from "react";
import AuthorizedRouter from "./AuthorizedRouter";
import { Route, Routes } from "react-router";

const AppRouter = () => {
    const isAuthorized = useAuthStore((state) => state.isAuthorized);
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);

    useLayoutEffect(() => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
            apiService.setAuthorizationHeader(access_token);
            setIsAuthorized(true);
        }
    }, []);

    if (isAuthorized) return <AuthorizedRouter />;
    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
        </Routes>
    );
};

export default AppRouter;
