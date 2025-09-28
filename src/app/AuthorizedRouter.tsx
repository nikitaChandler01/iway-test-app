import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import { TripsPage } from "@pages/TripsPage";

const AuthorizedRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/*" element={<TripsPage />} />
      </Routes>
    </Layout>
  );
};

export default AuthorizedRouter;
