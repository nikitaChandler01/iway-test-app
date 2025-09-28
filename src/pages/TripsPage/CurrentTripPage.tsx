import {
  CarOutlined,
  ClockCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TripStatus } from "@entities/trips";
import {
  tripsApiService,
  type TripDtoResponse,
} from "@shared/api/entities/trips";
import DescriptionItem from "@shared/ui/DescriptionItem/DescriptionItem";
import Loader from "@shared/ui/Loader/Loader";
import { Flex, Timeline } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CurrentTripPage = () => {
  const { order_id } = useParams();
  const [trip, setTrip] = useState<TripDtoResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (order_id) {
      setLoading(true);
      loadTrip(+order_id);
    }
  }, [order_id]);

  const labelStyle = { minWidth: 100 };

  const loadTrip = async (order_id: number) =>
    await tripsApiService
      .getTrips({ order_id })
      .then((response) => {
        setTrip(response.result.orders[0]);
      })
      .finally(() => {
        setLoading(false);
      });

  if (loading) {
    return <Loader spinning label="Загружаем данные о поездке..." />;
  }
  if (trip)
    return (
      <Flex vertical gap={16} style={{ overflow: "auto", height: "100%" }}>
        <Flex style={{ marginBottom: 16 }} gap={6} align="center">
          <span>ID: {order_id}</span>
          <TripStatus status={trip.status} />
        </Flex>
        <Flex vertical gap={8}>
          <span>Маршрут:</span>
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
      </Flex>
    );
  return <></>;
};

export default CurrentTripPage;

