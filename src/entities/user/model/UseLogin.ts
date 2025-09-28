import { useDispatch } from "react-redux";
import { loginThunk } from "./UserThunk";
import type {
  SignInDtoRequest,
  SignInDtoResponse,
  SignInDtoResponseError,
} from "@shared/api/entities/user";
import { useState } from "react";
import { parseFormResponse } from "@shared/lib/parseThunksResponse";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<SignInDtoResponseError | null>(null);
  const login = async (payload: SignInDtoRequest) => {
    dispatch<AppDispatch>(loginThunk(payload))
      .then(parseFormResponse)
      .then((response: SignInDtoResponse) => {
        if (response.result?.token) {
          // Handle successful login
        } else {
          setError(response?.error ?? null);
        }
      });
  };

  return { login, error };
};

