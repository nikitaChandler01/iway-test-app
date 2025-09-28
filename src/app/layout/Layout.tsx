import { iwayLogo } from "@assets/icons";
import { Button, Flex } from "antd";
import React from "react";
import "./Layout.scss";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { userModel } from "@entities/user";
import { useNavigate } from "react-router";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userModel.setIsAuthorized(false));
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <Flex vertical className="layout">
      <Flex className="layout__body" vertical>
        <Flex className="layout__header" justify="space-between" align="center">
          <img src={iwayLogo} className="layout__logo" />
          <Button
            onClick={logout}
            type="link"
            danger
            className="layout__logout-button"
            icon={<LogoutOutlined />}
          />
        </Flex>
        <Flex className="layout__content">{children}</Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;

