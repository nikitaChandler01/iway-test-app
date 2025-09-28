import { tripsModel } from "@entities/trips";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLoadTrips = () => {
  const trips = useSelector(tripsModel.selectTrips);
  const loading = useSelector(tripsModel.selectLoading);
  const error = useSelector(tripsModel.selectError);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = () => {
    dispatch(tripsModel.loadTripsThunk());
  };

  return {
    trips,
    loading,
    error,
    loadTrips,
  };
};

