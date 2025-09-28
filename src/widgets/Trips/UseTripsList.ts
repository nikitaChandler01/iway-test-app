import { useLoadTrips } from "@features/trips";

export const useTripsList = () => {
  const { trips, loading, error, loadTrips } = useLoadTrips();

  return { trips, loading, error, loadTrips };
};

