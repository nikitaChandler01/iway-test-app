export const parseFormResponse = (response: any) => {
  const isError = response?.payload.success === false || response.error;
  if (isError) {
    throw response?.payload.data;
  } else {
    return response?.payload;
  }
};

