import Loader from "@shared/ui/Loader/Loader";
import TableTrips from "./TableTrips";
import { useTripsList } from "./UseTripsList";

const TripsList = () => {
  const { trips, loading, error, loadTrips } = useTripsList();
  if (error) return "Ошибка загрузки";
  if (loading)
    return <Loader label="Загружаем поездки..." spinning={true} size="large" />;

  return <TableTrips trips={trips} />;
};

export default TripsList;

