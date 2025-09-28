import { useDispatch } from "react-redux";
import { loginThunk } from "../../entities/user/model/UserThunk";
import type {
  SignInDtoRequest,
  SignInDtoResponse,
  SignInDtoResponseError,
} from "@shared/api/entities/user";
import { useState } from "react";
import { parseFormResponse } from "@shared/lib/parseThunksResponse";
import { setIsAuthorized } from "../../entities/user/model/UserSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<SignInDtoResponseError | null>(null);
  const login = async (payload: SignInDtoRequest) => {
    const { remember, ...rest } = payload;
    dispatch<AppDispatch>(loginThunk(rest))
      .then(parseFormResponse)
      .then((response: SignInDtoResponse) => {
        const token = response.result?.token;
        if (token) {
          if (remember) {
            localStorage.setItem("access_token", token);
          }
          dispatch(setIsAuthorized(true));
        } else {
          setError(response?.error ?? null);
        }
      });
  };

  return { login, error };
};

