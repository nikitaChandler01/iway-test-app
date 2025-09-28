import { EyeOutlined } from "@ant-design/icons";
import { TripStatus } from "@entities/trips";
import type { TripDtoResponse } from "@shared/api/entities/trips";
import { Button } from "antd";
import Table, { type ColumnsType } from "antd/es/table";
import { memo } from "react";
import { useNavigate } from "react-router";

interface ITableTrips {
  trips: TripDtoResponse[];
}

const TableTrips = ({ trips }: ITableTrips) => {
  const navigate = useNavigate();
  const moveTo = (order_id: number) => navigate(`/trips/${order_id}`);

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
      render: (value: string) => value,
    },
    {
      title: "Дата прибытия",
      dataIndex: "date_arrival",
      key: "date_arrival",
      render: (value: string) => value,
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
        return <TripStatus status={status} />;
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
    {
      title: "Действия",
      key: "actions",
      render: (_, record) => (
        <Button
          type="link"
          icon={<EyeOutlined />}
          onClick={() => moveTo(record.order_id)}
        />
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

