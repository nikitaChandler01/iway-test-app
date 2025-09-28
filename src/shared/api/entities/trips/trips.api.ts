import { api } from "../../api";
import { apiConfig } from "../../apiConfig";
import type { TripsDtoRequest, TripsGetResponse } from "./trips.types.ts";

export const getTrips = async (payload: TripsDtoRequest | undefined) => {
  return (
    await api.get<Promise<TResponse<TripsGetResponse>>>(apiConfig.trips.get, {
      params: { ...payload, limit: 25 },
    })
  ).data;
};

