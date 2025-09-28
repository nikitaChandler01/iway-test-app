import { Tag } from "antd";
import { statusMap } from "../constants";

const TripStatus = ({ status }: { status: number }) => {
  const statusItem = statusMap[status] ?? {
    text: "Неизвестно",
    color: "default",
  };
  console.log("statusItem", statusItem);
  return <Tag color={statusItem.color}>{statusItem.text}</Tag>;
};

export default TripStatus;

