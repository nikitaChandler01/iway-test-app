export type SignInDtoRequest = {
  login: string;
  password: string;
  remember?: boolean;
};

export type SignInDtoResponse = {
  result: {
    token: string;
  } | null;
  error?: SignInDtoResponseError;
};

export type SignInDtoResponseError = {
  status: 500;
  message: string;
  name: string;
  code: number;
};
