import { tripsModel } from "@entities/trips";
import type { TripsDtoRequest } from "@shared/api/entities/trips";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "./../../../entities/trips/model/TripsSelectors";
import { useLoadTrips } from "./UseLoadTrips";

export const useTripsFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(tripsModel.selectFilters);
  const loading = useSelector(selectLoading);

  const { loadTrips } = useLoadTrips();

  const onChange = (name: keyof TripsDtoRequest, value: string) => {
    dispatch(tripsModel.setFilters({ ...filters, [name]: value }));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange("names", e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange("email", e.target.value);
  };

  const onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange("order_status", e.target.value);
  };

  const onSubmit = () => {
    loadTrips({ ...filters });
  };

  return {
    filters,
    loading,
    onChangeName,
    onChangeEmail,
    onChangeStatus,
    onSubmit,
  };
};

