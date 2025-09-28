import { tripsModel } from "@entities/trips";
import { useSelector } from "react-redux";

export const usePagination = () => {
  const page = useSelector(tripsModel.selectPage);
  const pageCount = useSelector(tripsModel.selectPageCount);
  const totalItems = useSelector(tripsModel.selectTotalItems);

  return { page, pageCount, totalItems };
};

