import { Flex, type FlexProps } from "antd";
import "./CenterBox.scss";

interface ICenterBox extends FlexProps {}

const CenterBox = ({ children, ...props }: ICenterBox) => {
  return (
    <Flex className="center-box" {...props}>
      {children}
    </Flex>
  );
};

export default CenterBox;

