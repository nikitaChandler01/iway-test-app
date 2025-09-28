import { Flex, Typography } from "antd";
import type React from "react";

const { Text } = Typography;

interface IDescriptionItem {
  label: string | React.ReactNode;
  value: string | React.ReactNode;
}

const DescriptionItem = ({ label, value }: IDescriptionItem) => {
  return (
    <Flex gap={4}>
      <Text type="secondary">{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );
};

export default DescriptionItem;

