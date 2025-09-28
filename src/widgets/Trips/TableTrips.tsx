import type { TripDtoResponse } from "@shared/api/entities/trips";
import Table, { type ColumnsType } from "antd/es/table";
import { memo } from "react";

interface ITableTrips {
  trips: TripDtoResponse[];
}

const TableTrips = ({ trips }: ITableTrips) => {
  const tripColumns: ColumnsType<TripDtoResponse> = [
    {
      title: "ID",
      dataIndex: "order_id",
      key: "order_id",
    },
    {
      title: "Дата отправления",
      dataIndex: "date_departure",
      key: "date_departure",
      render: (value: string) => new Date(value).toLocaleString("ru-RU"),
    },
    {
      title: "Дата прибытия",
      dataIndex: "date_arrival",
      key: "date_arrival",
      render: (value: string) => new Date(value).toLocaleString("ru-RU"),
    },
    {
      title: "Маршрут",
      key: "route",
      render: (_, record) => (
        <span>
          {record.location_address} → {record?.destination_address}
        </span>
      ),
    },
    {
      title: "Пассажир",
      key: "passenger",
      render: (_, record) => {
        const passenger = record.passengers?.[0];
        return passenger ? (
          <span>
            {passenger.name} <br />
            <small>{passenger.phone}</small>
          </span>
        ) : (
          "-"
        );
      },
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status: number) => {
        // здесь можно сделать enum со статусами
        const statusMap: Record<number, { text: string; color: string }> = {
          0: { text: "Новый", color: "blue" },
          1: { text: "Подтверждена", color: "green" },
          2: { text: "Завершена", color: "gray" },
          3: { text: "Отменена", color: "red" },
        };
        const item = statusMap[status] ?? {
          text: "Неизвестно",
          color: "default",
        };
        return <span style={{ color: item.color }}>{item.text}</span>;
      },
    },
    {
      title: "Цена",
      key: "price",
      render: (_, record) => (
        <span>
          {record.price?.price ?? "-"} {record.currency ?? ""}
        </span>
      ),
    },
  ];
  return (
    <Table
      style={{ width: "100%", height: "100%", overflow: "auto" }}
      rowKey="order_id"
      columns={tripColumns}
      dataSource={trips}
      pagination={false}
    />
  );
};

export default memo(TableTrips);

