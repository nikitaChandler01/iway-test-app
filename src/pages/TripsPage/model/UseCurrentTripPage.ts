import {
  tripsApiService,
  type TripDtoResponse,
} from "@shared/api/entities/trips";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useCurrentTripPage = () => {
  const { order_id } = useParams();
  const [trip, setTrip] = useState<TripDtoResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (order_id) {
      setLoading(true);
      loadTrip(+order_id);
    }
  }, [order_id]);

  const loadTrip = async (order_id: number) =>
    await tripsApiService
      .getTrips({ order_id })
      .then((response) => {
        setTrip(response.result.orders[0]);
      })
      .finally(() => {
        setLoading(false);
      });

  return {
    trip,
    loading,
  };
};

