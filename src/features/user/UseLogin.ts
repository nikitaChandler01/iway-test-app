import type {
  SignInDtoRequest,
  SignInDtoResponse,
  SignInDtoResponseError,
} from "@shared/api/entities/user";
import { parseFormResponse } from "@shared/lib/parseThunksResponse";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userModel } from "@entities/user";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<SignInDtoResponseError | null>(null);
  const login = async (payload: SignInDtoRequest) => {
    const { remember, ...rest } = payload;
    dispatch<AppDispatch>(userModel.loginThunk(rest))
      .then(parseFormResponse)
      .then((response: SignInDtoResponse) => {
        const token = response.result?.token;
        if (token) {
          if (remember) {
            localStorage.setItem("access_token", token);
            navigate("/");
          }
        } else {
          setError(response?.error ?? null);
        }
      });
  };

  return { login, error };
};

