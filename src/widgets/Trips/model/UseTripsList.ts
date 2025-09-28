import { tripsModel } from "@entities/trips";
import { useLoadTrips } from "@features/trips";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useTripsList = () => {
  const trips = useSelector(tripsModel.selectTrips);
  const { loading, error, loadTrips } = useLoadTrips();
  const [listMode, setListMode] = useState<"table" | "list">("list");

  return { trips, loading, error, loadTrips, listMode, setListMode };
};

