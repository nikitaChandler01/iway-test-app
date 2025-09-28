import TripListItem from "@entities/trips/ui/TripListItem";
import type { TripDtoResponse } from "@shared/api/entities/trips";
import { Flex } from "antd";
import "./TripsList.scss";

interface ITripsList {
  trips: TripDtoResponse[];
}

const TripsList = ({ trips }: ITripsList) => {
  return (
    <Flex vertical gap={16} className="trips-list">
      {trips.map((trip) => (
        <TripListItem key={trip.order_id} trip={trip} />
      ))}
    </Flex>
  );
};

export default TripsList;

