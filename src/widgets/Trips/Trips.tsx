import { TripsFilters, TripsList, TripsPagination } from "@features/trips";
import Loader from "@shared/ui/Loader/Loader";
import { Flex } from "antd";
import { useTripsList } from "./UseTripsList";
import CenterBox from "@shared/ui/CenterBox/CenterBox";

const Trips = () => {
  const { trips, loading, error } = useTripsList();
  return (
    <Flex vertical style={{ width: "100%", height: "100%" }} gap={8}>
      <TripsFilters />
      {/* <TableTrips trips={trips} /> */}

      {loading ? (
        <Loader label="Загружаем поездки..." spinning={true} size="large" />
      ) : error ? (
        <CenterBox>Ошибка загрузки</CenterBox>
      ) : (
        <TripsList trips={trips} />
      )}
      <TripsPagination />
    </Flex>
  );
};

export default Trips;

