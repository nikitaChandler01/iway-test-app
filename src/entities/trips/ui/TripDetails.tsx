import {
  CarOutlined,
  ClockCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DescriptionItem from "@shared/ui/DescriptionItem/DescriptionItem";
import { Flex } from "antd";
import type { ITrip } from "../types";

const TripDetails = ({ trip }: ITrip) => {
  const labelStyle = { minWidth: 100 };

  return (
    <Flex vertical gap={8}>
      <span>Детали поездки</span>
      <DescriptionItem
        labelStyle={labelStyle}
        label="Отправление"
        value={
          <Flex vertical>
            <Flex gap={4}>
              <ClockCircleOutlined />
              {trip.date_departure}
            </Flex>
            <span>{trip.location_address}</span>
          </Flex>
        }
      />
      <DescriptionItem
        labelStyle={labelStyle}
        label="Прибытие"
        value={
          <Flex vertical>
            <Flex gap={4}>
              <ClockCircleOutlined />
              {trip.date_arrival}
            </Flex>
            <span>{trip.destination_address}</span>
          </Flex>
        }
      />
      <DescriptionItem
        labelStyle={labelStyle}
        label="Пассажиры"
        value={
          <ul>
            {trip.passengers.map((passenger, idx, { length }) => (
              <li key={idx}>
                <Flex
                  vertical
                  style={{
                    borderBottom:
                      idx !== length - 1 ? "1px solid lightgray " : "none",
                  }}
                >
                  <Flex gap={4}>
                    <UserOutlined /> {passenger.name}
                  </Flex>
                  <Flex gap={4}>
                    <PhoneOutlined />
                    {passenger.phone}
                  </Flex>
                  <Flex gap={4}>
                    <MailOutlined />
                    {passenger.email}
                  </Flex>
                </Flex>
              </li>
            ))}
          </ul>
        }
      />
      {trip.car_data?.car_class && (
        <DescriptionItem
          labelStyle={labelStyle}
          label={<span>Тариф:</span>}
          value={
            <>
              <CarOutlined /> {trip.car_data.car_class}
            </>
          }
        />
      )}
      <DescriptionItem
        labelStyle={labelStyle}
        label={<span>Стоимость:</span>}
        value={
          <span>
            {trip.price.price} {trip.currency ?? ""}
          </span>
        }
      />
      <DescriptionItem
        labelStyle={labelStyle}
        label={<span>Водитель:</span>}
        value={
          <Flex vertical>
            <Flex gap={4}>
              <UserOutlined />{" "}
              {trip.driver_data.driver_name
                ? trip.driver_data.driver_name
                : "Имя не указано"}
            </Flex>
            <Flex gap={4}>
              <PhoneOutlined />
              {trip.driver_data.driver_phone
                ? trip.driver_data.driver_phone
                : "Телефон не указан"}
            </Flex>
            <Flex gap={4}>
              <CarOutlined />
              {trip.driver_data.driver_car
                ? trip.driver_data.driver_car
                : "Машина не указана"}
            </Flex>
          </Flex>
        }
      />
      <DescriptionItem
        labelStyle={labelStyle}
        label={<span>Номер брони:</span>}
        value={<span>{trip.booker_number}</span>}
      />
      {trip.notes ? (
        <DescriptionItem
          labelStyle={labelStyle}
          label={<span>Примечание:</span>}
          value={<span>{trip.notes ? trip.notes : "Нет примечаний"}</span>}
        />
      ) : undefined}
    </Flex>
  );
};

export default TripDetails;

