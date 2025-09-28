const userRoute = "/api/user";

export const apiConfig = {
    oauth: {
        signIn: "/v3/auth/login",
    },
    user: {
        getInfo: `${userRoute}/get`,
        getById: (id: number) => `${userRoute}/get/${id}`,
        getAll: `${userRoute}/all`,
    },
};
