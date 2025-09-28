import { userModel } from "@entities/user";
import { SignIn } from "@pages/SignIn";
import { apiService } from "@shared/api/api";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import AuthorizedRouter from "./AuthorizedRouter";

const AppRouter = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(userModel.selectIsAuthorizated);
  const setIsAuthorized = userModel.setIsAuthorized;
  useLayoutEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      apiService.setAuthorizationHeader(access_token);
      dispatch(setIsAuthorized(true));
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
