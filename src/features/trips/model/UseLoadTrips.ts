import { tripsModel } from "@entities/trips";
import type { TripsDtoRequest } from "@shared/api/entities/trips";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "./UsePagination";

export const useLoadTrips = () => {
  const { page } = usePagination();
  const loading = useSelector(tripsModel.selectLoading);
  const error = useSelector(tripsModel.selectError);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    loadTrips({ page });
  }, [page]);

  const loadTrips = (params: TripsDtoRequest) => {
    dispatch(tripsModel.loadTripsThunk(params));
  };

  return {
    page,
    loading,
    error,
    loadTrips,
  };
};

