import { BarsOutlined, TableOutlined } from "@ant-design/icons";
import { TripsFilters, TripsList, TripsPagination } from "@features/trips";
import CenterBox from "@shared/ui/CenterBox/CenterBox";
import Loader from "@shared/ui/Loader/Loader";
import { Flex, Segmented } from "antd";
import { useTripsList } from "../model";
import TableTrips from "./TableTrips";

const Trips = () => {
  const { trips, loading, error, listMode, setListMode } = useTripsList();
  return (
    <Flex vertical style={{ width: "100%", height: "100%" }} gap={8}>
      <Flex gap={4}>
        <Segmented
          options={[
            { label: <BarsOutlined />, value: "list" },
            { label: <TableOutlined />, value: "table" },
          ]}
          value={listMode}
          onChange={setListMode}
        />
        <TripsFilters />
      </Flex>

      {loading ? (
        <Loader label="Загружаем поездки..." spinning={true} size="large" />
      ) : error ? (
        <CenterBox>Ошибка загрузки</CenterBox>
      ) : (
        <>
          {listMode === "table" ? (
            <TableTrips trips={trips} />
          ) : (
            <TripsList trips={trips} />
          )}
        </>
      )}
      <TripsPagination />
    </Flex>
  );
};

export default Trips;

