import { TripsPage } from "@pages/TripsPage";
import CurrentTripPage from "@pages/TripsPage/CurrentTripPage";
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
