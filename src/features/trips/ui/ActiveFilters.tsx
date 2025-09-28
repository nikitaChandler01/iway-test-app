import { tripsConstants, tripsModel } from "@entities/trips";
import type { TripsDtoRequest } from "@shared/api/entities/trips";
import { Tag, theme, type FormInstance } from "antd";
import { useSelector } from "react-redux";
import { useActiveFilters } from "../model";
export interface IActiveFilters {
  form: FormInstance<TripsDtoRequest>;
  disabled?: boolean;
  onSubmit: () => void;
  onReset?: (item: (keyof TripsDtoRequest)[]) => void;
}
const ActiveFilters = ({ form, disabled, onSubmit }: IActiveFilters) => {
  const filters = useSelector(tripsModel.selectFilters);
  const { onDeleteEmail, onDeleteNames, onDeleteStatus } = useActiveFilters({
    form,
    onSubmit,
  });
  const { token } = theme.useToken();

  const style = {
    margin: 0,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    opacity: 0.8,
    height: 32,
  };
  const props = {
    closable: !disabled,
    color: token.colorPrimary,
    style,
  };
  return (
    <>
      {filters.names && (
        <Tag className="active-filter-tag" {...props} onClose={onDeleteNames}>
          Имя: {filters.names}
        </Tag>
      )}
      {filters.email && (
        <Tag className="active-filter-tag" {...props} onClose={onDeleteEmail}>
          Почта: {filters.email}
        </Tag>
      )}
      {filters.order_status && filters.order_status.length > 0 && (
        <Tag className="active-filter-tag" {...props} onClose={onDeleteStatus}>
          {filters.order_status?.[0] ? (
            <span>
              {tripsConstants.statusMap[filters.order_status[0]].text}
            </span>
          ) : undefined}
          {filters.order_status?.[1] ? (
            <span>
              , {tripsConstants.statusMap[filters.order_status[1]].text}
            </span>
          ) : undefined}
          {filters.order_status?.[2] ? <span>, ...</span> : undefined}
        </Tag>
      )}
    </>
  );
};

export default ActiveFilters;

