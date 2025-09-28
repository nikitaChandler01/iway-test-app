import { tripsModel } from "@entities/trips";
import type { TripsDtoRequest } from "@shared/api/entities/trips";
import { Form } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "./../../../entities/trips/model/TripsSelectors";
import { useLoadTrips } from "./UseLoadTrips";

export const useTripsFilters = () => {
  const [form] = Form.useForm();
  const [open, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const filters = useSelector(tripsModel.selectFilters);
  const loading = useSelector(selectLoading);
  const { loadTrips } = useLoadTrips();
  const onSubmit = () => {
    const filters = form.getFieldsValue();
    loadTrips({ ...filters });
    dispatch(tripsModel.setFilters(filters));
    onClose();
  };

  const onReset = (fields?: (keyof TripsDtoRequest)[]) => {
    form.resetFields(fields);
    dispatch(tripsModel.setFilters({ names: "", email: "", order_status: [] }));
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return {
    filters,
    loading,
    form,
    open,
    onSubmit,
    onReset,
    onOpen,
    onClose,
  };
};
