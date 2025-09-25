const userRoute = "/api/user";

export const apiConfig = {
    oauth: {
        signIn: "/oauth/token",
    },
    user: {
        getInfo: `${userRoute}/get`,
        getById: (id: number) => `${userRoute}/get/${id}`,
        getAll: `${userRoute}/all`,
    },
};
