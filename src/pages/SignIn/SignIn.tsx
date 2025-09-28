import { userModel } from "@entities/user";
import type { SignInDtoRequest } from "@shared/api/entities/user";
import CenterBox from "@shared/ui/CenterBox";
import { SignInForm } from "@widgets/SignIn";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

const SignIn = () => {
  const { login, error } = userModel.useLogin();
  const onFinish: FormProps<SignInDtoRequest>["onFinish"] = (values) => {
    login(values);
  };

  return (
    <CenterBox>
      <SignInForm />
    </CenterBox>
  );
};

export default SignIn;

