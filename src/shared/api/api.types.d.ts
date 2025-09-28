declare type TResponse<T> = {
  error: TError;
  result: T;
  message: string;
};

declare type TError = Record<string, any>;
