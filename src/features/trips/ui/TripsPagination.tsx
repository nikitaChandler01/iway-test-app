import { Pagination } from "antd";
import { usePagination } from "../model";

const TripsPagination = () => {
  const { page, loading, totalItems, setPage } = usePagination();

  return (
    <Pagination
      disabled={loading}
      onChange={setPage}
      size="small"
      onShowSizeChange={(current, pageSize) => console.log(current, pageSize)}
      current={page}
      total={totalItems}
      showSizeChanger={false}
      pageSize={25}
    />
  );
};

export default TripsPagination;

