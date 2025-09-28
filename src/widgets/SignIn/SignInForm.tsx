import { userModel } from "@entities/user";
import type { SignInDtoRequest } from "@shared/api/entities/user";
import type { FormProps } from "antd";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import "./SignInForm.scss";
import { iwayLogo } from "@assets/icons";

const SignInForm = () => {
  const { login, error } = userModel.useLogin();
  const onFinish: FormProps<SignInDtoRequest>["onFinish"] = (values) => {
    login(values);
  };

  return (
    <Form
      layout="vertical"
      variant="underlined"
      className="sign-in-form"
      requiredMark="optional"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Flex className="sign-in-form__header" justify="center">
        <img src={iwayLogo} className="sign-in-form__logo" />
      </Flex>
      <Form.Item<SignInDtoRequest>
        label="Логин"
        name="login"
        rules={[{ required: true, message: "Пожалуйста, введите ваш логин!" }]}
      >
        <Input />
        {error && <span style={{ color: "red" }}>{error.message}</span>}
      </Form.Item>

      <Form.Item<SignInDtoRequest>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите ваш пароль!" }]}
      >
        <Input.Password />
        {error && <span style={{ color: "red" }}>{error.message}</span>}
      </Form.Item>

      <Form.Item<SignInDtoRequest> style={{ marginBottom: 0 }}>
        <Form.Item<SignInDtoRequest>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Войти
          </Button>
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default SignInForm;

