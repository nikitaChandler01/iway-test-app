import { Pagination } from "antd";
import { usePagination } from "../model";

const TripsPagination = () => {
  const { page, pageCount, totalItems } = usePagination();

  return (
    <Pagination
      onChange={(page) => console.log(page)}
      onShowSizeChange={(current, pageSize) => console.log(current, pageSize)}
      current={page}
      total={totalItems}
      showSizeChanger={false}
      pageSize={25}
    />
  );
};

export default TripsPagination;

