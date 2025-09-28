import { TripsList, TripsPagination } from "@features/trips";
import Loader from "@shared/ui/Loader/Loader";
import { Flex } from "antd";
import { useTripsList } from "./UseTripsList";

const Trips = () => {
  const { trips, loading, error, loadTrips } = useTripsList();
  if (error) return "Ошибка загрузки";
  if (loading)
    return <Loader label="Загружаем поездки..." spinning={true} size="large" />;

  return (
    <Flex vertical style={{ width: "100%", height: "100%" }} gap={16}>
      {/* <TableTrips trips={trips} /> */}
      <TripsList trips={trips} />
      <TripsPagination />
    </Flex>
  );
};

export default Trips;

