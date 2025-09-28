import { tripsModel } from "@entities/trips";
import { useDispatch, useSelector } from "react-redux";

export const usePagination = () => {
  const page = useSelector(tripsModel.selectPage);
  const loading = useSelector(tripsModel.selectLoading);
  const pageCount = useSelector(tripsModel.selectPageCount);
  const totalItems = useSelector(tripsModel.selectTotalItems);
  const dispatch = useDispatch();
  const setPage = (page: number) => {
    dispatch(tripsModel.setPage(page));
  };

  return { page, loading, pageCount, totalItems, setPage };
};

