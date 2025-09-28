import { api } from "../../api";
import { apiConfig } from "../../apiConfig";
import type { TripDtoResponse, TripsDtoRequest } from "./trips.types.ts";

export const getTrips = async (payload: TripsDtoRequest) => {
  return (
    await api.get<Promise<TripDtoResponse>>(apiConfig.oauth.signIn, {
      params: payload,
    })
  ).data;
};

