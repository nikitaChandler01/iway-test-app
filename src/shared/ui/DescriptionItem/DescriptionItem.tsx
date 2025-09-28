import { Flex, Typography } from "antd";
import type { CSSProperties } from "react";
import type React from "react";

const { Text } = Typography;

interface IDescriptionItem {
  label: string | React.ReactNode;
  value: string | React.ReactNode;
  labelStyle?: CSSProperties;
}

const DescriptionItem = ({ label, value, labelStyle }: IDescriptionItem) => {
  return (
    <Flex gap={6}>
      <Text type="secondary" style={labelStyle}>
        {label}
      </Text>
      <Text>{value}</Text>
    </Flex>
  );
};

export default DescriptionItem;

