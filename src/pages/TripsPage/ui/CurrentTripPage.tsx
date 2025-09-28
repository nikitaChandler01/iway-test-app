import { TripRoute, TripStatus } from "@entities/trips";
import TripDetails from "@entities/trips/ui/TripDetails";
import {
  tripsApiService,
  type TripDtoResponse,
} from "@shared/api/entities/trips";
import Loader from "@shared/ui/Loader/Loader";
import { Flex } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CurrentTripPage = () => {
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

  if (loading) {
    return <Loader spinning label="Загружаем данные о поездке..." />;
  }
  if (trip)
    return (
      <Flex vertical gap={16} style={{ overflow: "auto", height: "100%" }}>
        <Flex style={{ marginBottom: 16 }} gap={6} align="center">
          <span>ID: {order_id}</span>
          <TripStatus status={trip.status} />
        </Flex>
        <TripRoute trip={trip} />
        <TripDetails trip={trip} />
      </Flex>
    );
  return <></>;
};

export default CurrentTripPage;

