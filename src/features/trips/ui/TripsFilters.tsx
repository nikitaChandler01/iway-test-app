import {
  CloseOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Flex } from "antd";
import { useTripsFilters } from "../model";
import ActiveFilters from "./ActiveFilters";
import "./TripsFilters.scss";
import TripsFiltersForm from "./TripsFiltersForm";

const TripsFilters = () => {
  const { filters, loading, form, open, onSubmit, onReset, onOpen, onClose } =
    useTripsFilters();
  const onFormLayoutChange = () => {};

  return (
    <>
      <Flex gap={8} wrap="wrap">
        <Button
          style={{ minWidth: 32 }}
          disabled={loading}
          icon={<FilterOutlined />}
          type="primary"
          onClick={onOpen}
        />
        <ActiveFilters
          form={form}
          disabled={loading}
          onSubmit={onSubmit}
          onReset={onReset}
        />
      </Flex>
      <Drawer
        onClose={onClose}
        footer={
          <Flex gap={8}>
            <Button
              icon={<SearchOutlined />}
              type="primary"
              htmlType="submit"
              onClick={onSubmit}
            >
              Найти
            </Button>
            <Button
              icon={<CloseOutlined />}
              htmlType="button"
              onClick={() => onReset()}
            >
              Сбросить
            </Button>
          </Flex>
        }
        open={open}
      >
        <TripsFiltersForm
          filters={filters}
          form={form}
          loading={loading}
          onSubmit={onSubmit}
          onFormLayoutChange={onFormLayoutChange}
        />
      </Drawer>
    </>
  );
};

export default TripsFilters;

