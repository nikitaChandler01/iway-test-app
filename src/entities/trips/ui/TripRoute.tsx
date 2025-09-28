import { Flex, Timeline } from "antd";
import type { ITrip } from "../types";

const TripRoute = ({ trip }: ITrip) => {
  return (
    <Flex vertical gap={8}>
      <span style={{ fontWeight: "bold" }}>Маршрут:</span>
      <Timeline
        items={[
          {
            children: `${trip.date_departure} ${trip.location_address}`,
          },
          {
            children: `${trip.date_arrival} ${trip.destination_address}`,
          },
        ]}
      />
    </Flex>
  );
};

export default TripRoute;

