import { TripListItem } from "@entities/trips";
import type { TripDtoResponse } from "@shared/api/entities/trips";
import { Flex } from "antd";
import "./TripsList.scss";
import CenterBox from "@shared/ui/CenterBox/CenterBox";
import { useNavigate } from "react-router";

interface ITripsList {
  trips: TripDtoResponse[];
}

const TripsList = ({ trips }: ITripsList) => {
  const navigate = useNavigate();
  const showMore = (order_id: number) => {
    navigate(`/trips/${order_id}`);
  };

  return (
    <Flex vertical gap={16} className="trips-list">
      {trips.length > 0 ? (
        trips.map((trip) => (
          <TripListItem
            key={trip.order_id}
            trip={trip}
            onShowMoreClick={showMore}
          />
        ))
      ) : (
        <CenterBox>Поездки не найдены</CenterBox>
      )}
    </Flex>
  );
};

export default TripsList;

