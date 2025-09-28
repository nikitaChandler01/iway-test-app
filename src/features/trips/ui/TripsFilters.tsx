import { Button, Form, Input, Select } from "antd";
import "./TripsFilters.scss";
import { useTripsFilters } from "../model";
import { memo } from "react";

const TripsFilters = () => {
  const {
    filters,
    loading,
    onChangeName,
    onChangeEmail,
    onChangeStatus,
    onSubmit,
  } = useTripsFilters();
  const onFormLayoutChange = () => {};

  return (
    <Form
      disabled={loading}
      layout="inline"
      variant="underlined"
      onSubmitCapture={onSubmit}
      onValuesChange={onFormLayoutChange}
      className="trips-filters"
    >
      <Form.Item label="Имя пассажира" name="names">
        <Input
          value={filters.name}
          onChange={onChangeName}
          placeholder="Введите имя пассажира"
        />
      </Form.Item>
      <Form.Item label="Почта пассажира" name="email">
        <Input
          value={filters.email}
          onChange={onChangeEmail}
          placeholder="Введите почту пассажира"
        />
      </Form.Item>
      <Form.Item label="Статусы поездки" name="order_status">
        <Select
          value={filters.order_status}
          onChange={onChangeStatus}
          placeholder="Выберите статус поездки"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Найти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(TripsFilters);

