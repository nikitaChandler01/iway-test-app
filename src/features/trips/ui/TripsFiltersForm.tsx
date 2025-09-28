import type { TripsDtoRequest } from "@shared/api/entities/trips";
import { Form, Input, Select, type FormInstance } from "antd";

interface ITripsFiltersForm {
  form: FormInstance<TripsDtoRequest>;
  loading: boolean;
  onSubmit: VoidFunction;
  onFormLayoutChange: VoidFunction;
  filters: TripsDtoRequest;
}

const TripsFiltersForm = ({
  form,
  loading,
  onSubmit,
  onFormLayoutChange,
  filters,
}: ITripsFiltersForm) => {
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("names", e.target.value);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue("email", e.target.value);
  };

  const onChangeStatus = (value: number[]) => {
    form.setFieldValue("order_status", value);
  };

  return (
    <Form
      initialValues={filters}
      form={form}
      disabled={loading}
      layout="vertical"
      variant="underlined"
      onSubmitCapture={onSubmit}
      onValuesChange={onFormLayoutChange}
      className="trips-filters"
    >
      <Form.Item label="Имя пассажира" name="names">
        <Input
          value={filters.names}
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
          value={filters.order_status ?? []}
          options={[]}
          onChange={onChangeStatus}
          placeholder="Выберите статус поездки"
        />
      </Form.Item>
    </Form>
  );
};

export default TripsFiltersForm;

