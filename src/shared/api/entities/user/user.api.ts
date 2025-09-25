import { api } from "../../api";
import { apiConfig } from "../../apiConfig";
import type { SignInDtoRequest, SignInDtoResponse } from "./user.api.types";

export const login = async (payload: SignInDtoRequest) => {
    return (
        await api.post<Promise<SignInDtoResponse>>(apiConfig.oauth.signIn, payload)
    ).data;
};