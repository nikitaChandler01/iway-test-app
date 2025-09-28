import {
  CarOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DescriptionItem from "@shared/ui/DescriptionItem/DescriptionItem";
import { Button, Card, Flex, Typography } from "antd";
import type { ITrip } from "../types";
import "./TripListItem.scss";
import TripStatus from "./TripStatus";
const { Text } = Typography;

interface ITripListItem extends ITrip {
  onShowMoreClick: (order_id: number) => void;
}

const TripListItem = ({ trip, onShowMoreClick }: ITripListItem) => {
  const passenger = trip.passengers?.[0];
  const handleShowMoreClick = () => {
    onShowMoreClick(trip.order_id);
  };

  return (
    <Card className="trip-list-item">
      <Flex vertical gap={12}>
        <Flex justify="space-between" align="center">
          <Text strong>{trip.date_departure}</Text>
          <Flex gap={12} align="center">
            <TripStatus status={trip.status} />
            <Text>
              {trip.price?.price ?? "-"} {trip.currency ?? ""}
            </Text>
          </Flex>
        </Flex>
        <Flex vertical gap={6}>
          <DescriptionItem
            label={"Маршрут:"}
            value={
              <>
                {trip.location_address} → {trip.destination_address}
              </>
            }
          />
          {passenger && (
            <Flex gap={16} wrap>
              <DescriptionItem
                label={
                  <span>
                    <UserOutlined /> Пассажир:
                  </span>
                }
                value={passenger.name}
              />
              <DescriptionItem
                label={
                  <span>
                    <PhoneOutlined /> Телефон:
                  </span>
                }
                value={passenger.phone}
              />
              <DescriptionItem
                label={
                  <span>
                    <MailOutlined /> Почта:
                  </span>
                }
                value={passenger.email}
              />
            </Flex>
          )}
          {trip.car_data?.car_class && (
            <DescriptionItem
              label={
                <span>
                  <CarOutlined /> Тариф:
                </span>
              }
              value={trip.car_data.car_class}
            />
          )}
        </Flex>
        <Flex justify="end">
          <Button
            onClick={handleShowMoreClick}
            className="trip-card__show-more"
            size="small"
            type="link"
          >
            Подробнее
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default TripListItem;

