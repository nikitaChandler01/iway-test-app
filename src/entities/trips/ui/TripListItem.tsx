import type { TripDtoResponse } from "@shared/api/entities/trips";
import { Flex, Typography, Tag, Card, Button } from "antd";
import "./TripListItem.scss";
import {
  CarOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DescriptionItem from "@shared/ui/DescriptionItem/DescriptionItem";
const { Text } = Typography;

interface ITripListItem {
  trip: TripDtoResponse;
}

const TripListItem = ({ trip }: ITripListItem) => {
  const passenger = trip.passengers?.[0];

  const statusMap: Record<number, { text: string; color: string }> = {
    0: { text: "Новый", color: "blue" },
    1: { text: "Подтверждена", color: "green" },
    2: { text: "Завершена", color: "default" },
    3: { text: "Отменена", color: "red" },
  };
  const status = statusMap[trip.status] ?? {
    text: "Неизвестно",
    color: "default",
  };
  return (
    <Card className="trip-list-item">
      <Flex vertical gap={12}>
        <Flex justify="space-between" align="center">
          <Text strong>
            {new Date(trip.date_departure).toLocaleString("ru-RU")}
          </Text>
          <Flex gap={12} align="center">
            <Tag color={status.color}>{status.text}</Tag>
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
          <Button className="trip-card__show-more" size="small" type="link">
            Подробнее
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default TripListItem;

