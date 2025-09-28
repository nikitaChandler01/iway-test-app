import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Typography } from "antd";
import CenterBox from "../CenterBox/CenterBox";

interface ILoader {
  spinning?: boolean;
  size?: "small" | "default" | "large";
  label?: string;
}

const Loader = ({ spinning = true, size = "default", label }: ILoader) => {
  return (
    <CenterBox vertical>
      <Spin
        indicator={<LoadingOutlined spin />}
        spinning={spinning}
        size={size}
      />
      {label && <Typography.Text>{label}</Typography.Text>}
    </CenterBox>
  );
};

export default Loader;

