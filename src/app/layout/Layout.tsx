import { iwayLogo } from "@assets/icons";
import { Button, Flex } from "antd";
import React from "react";
import "./Layout.scss";
import { LogoutOutlined } from "@ant-design/icons";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <Flex vertical className="layout">
      <Flex className="layout__body" vertical>
        <Flex className="layout__header" justify="space-between" align="center">
          <img src={iwayLogo} className="layout__logo" />
          <Button
            className="layout__logout-button"
            shape="circle"
            icon={<LogoutOutlined />}
          />
        </Flex>
        <Flex className="layout__content">{children}</Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;

