import type { TripsDtoRequest } from "@shared/api/entities/trips";
import type { IActiveFilters } from "../ui/ActiveFilters";

export const useActiveFilters = ({ form, onSubmit }: IActiveFilters) => {
  const onClose = (filterName: keyof TripsDtoRequest) => {
    form.setFieldValue(filterName, undefined);
    onSubmit();
  };

  const onDeleteNames = () => {
    onClose("names");
    form.setFieldValue("names", undefined);
  };

  const onDeleteEmail = () => {
    onClose("email");
    form.setFieldValue("email", undefined);
  };

  const onDeleteStatus = () => {
    onClose("order_status");
    form.setFieldValue("order_status", undefined);
  };

  return {
    onDeleteEmail,
    onDeleteNames,
    onDeleteStatus,
  };
};

