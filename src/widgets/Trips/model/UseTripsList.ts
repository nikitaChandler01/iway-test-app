import { tripsModel } from "@entities/trips";
import { useLoadTrips } from "@features/trips";
import { useSelector } from "react-redux";

export const useTripsList = () => {
  const trips = useSelector(tripsModel.selectTrips);
  const { loading, error, loadTrips } = useLoadTrips();

  return { trips, loading, error, loadTrips };
};

