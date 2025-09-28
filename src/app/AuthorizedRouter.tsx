import { TripsPage, CurrentTripPage } from "@pages/TripsPage";
import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";

const AuthorizedRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/trips/:order_id" element={<CurrentTripPage />} />
        <Route path="/*" element={<TripsPage />} />
      </Routes>
    </Layout>
  );
};

export default AuthorizedRouter;
