import { TripRoute, TripStatus } from "@entities/trips";
import TripDetails from "@entities/trips/ui/TripDetails";
import Loader from "@shared/ui/Loader/Loader";
import { Flex } from "antd";
import { useCurrentTripPage } from "../model";


const CurrentTrip = () => {
  const { trip, loading } = useCurrentTripPage();
  if (loading) {
    return <Loader spinning label="Загружаем данные о поездке..." />;
  }
  if (trip)
    return (
      <Flex vertical gap={16} style={{ overflow: "auto", height: "100%" }}>
        <Flex style={{ marginBottom: 16 }} gap={6} align="center">
          <span>ID: {trip.order_id}</span>
          <TripStatus status={trip.status} />
        </Flex>
        <TripRoute trip={trip} />
        <TripDetails trip={trip} />
      </Flex>
    );
  return <></>;
};

export default CurrentTrip;

