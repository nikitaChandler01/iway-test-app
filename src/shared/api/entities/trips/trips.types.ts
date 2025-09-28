import type { Person } from "@shared/types/PersonType";

export interface AddressWithGeoData {
  address: string; // Дополнительный адрес
  geo_check: boolean; // Флаг проверки геоданных
  geo_data: object; // Объект с геоданными (можно уточнить тип)
}

// ---------- Пассажир ----------
export interface Passenger extends Person {
  company: string; // Компания пассажира
  client_id: number; // ID клиента
  company_id: number; // ID компании
}

// ---------- Автомобиль ----------
export interface CarData {
  car_class_id: number; // ID класса автомобиля
  car_class: string; // Название класса (economy, business и т.п.)
  models: string; // Модель автомобиля
  capacity: number; // Вместимость
}

// ---------- Водитель ----------
export interface DriverData {
  driver_name: string; // Имя водителя
  driver_phone: string; // Телефон водителя
  driver_car: string; // Автомобиль водителя
}

// ---------- Стоимость ----------
export interface Price {
  price_id: number; // ID тарифа
  price: number; // Стоимость поездки
  price_subaddress: number; // Стоимость за дополнительный адрес
}

// ---------- Место ----------
export interface Place {
  place_id: number; // ID места
  title: string; // Название места
  type: number; // Тип места
  type_title: string; // Название типа
  city_id: number; // ID города
  city: string; // Название города
}

// ---------- Настройки уведомлений ----------
export interface SendParams {
  send_client_voucher: boolean; // Отправлять ваучер пассажиру
  send_admin_voucher: boolean; // Отправлять ваучер админу
  send_client_doc: boolean; // Отправлять документы клиенту
  send_admin_doc: boolean; // Отправлять документы админу
}

// ---------- Клиент ----------
type Customer = Person;

// ---------- Координатор ----------
type Coordinator = Omit<Person, "email">;

// ---------- Доп. услуга ----------
export interface AdditionalService {
  id: number; // ID ценообразования Доп услуги
  additional_service_id: number; // ID доп. услуги
  name: string; // Название доп. услуги
  uid: string; // Уникальный идентификатор
  uid_additional_service: string; // Уникальный ID доп. услуги
  price: number; // Цена услуги
  category: string; // Категория (flexible_tariff / all)
  coefficient: number; // Коэффициент наценки
  type: string; // Тип доп. услуги
}

// ---------- Главный объект поездки ----------
export interface TripDtoResponse {
  order_id: number; // Уникальный ID поездки
  user_id: number; // ID пользователя
  order_type: number; // Тип заказа
  transaction: number; // ID транзакции
  date: string; // Дата бронирования
  date_arrival: string; // Дата прибытия
  date_departure: string; // Дата отъезда
  payable_status: number; // Статус оплаты
  status: number; // Статус заказа
  service_id: number; // ID сервиса
  duration: number; // Продолжительность поездки
  doer_city_id: number; // ID города-исполнителя
  allowable_time: number; // Минимальное время до подачи авто
  cancellation_time: number; // Время бесплатной отмены (минуты)
  reward: number; // Вознаграждение агенту
  booker_number: string; // Номер брони
  arrival_number: string; // Номер рейса прилета
  departure_number: string; // Номер рейса вылета
  table: string; // Надпись на табличке
  notes: string; // Примечания для водителя
  location_address: string; // Адрес подачи
  destination_address: string; // Адрес назначения
  lang: string; // Язык заказа
  coef_subaddress: number; // Коэф. наценки за доп. адреса
  subaddress: AddressWithGeoData[]; // Доп. адреса
  passengers: Passenger[]; // Пассажиры
  passengers_number: number; // Кол-во пассажиров
  cancellation_time_without_penalty: string; // Дата и время бесплатной отмены
  destination_address_object: AddressWithGeoData; // Объект адреса назначения
  location_address_object: AddressWithGeoData; // Объект адреса подачи
  car_data: CarData; // Данные авто
  driver_data: DriverData; // Данные водителя
  currency: string; // Валюта
  price: Price; // Стоимость
  start_place: Place; // Стартовое место
  finish_place: Place; // Место назначения
  additional_change_itinerary: number; // Доп. изменения маршрута
  additional_wait: number; // Доп. ожидание
  additional_address: boolean; // Разрешение доп. адресов
  fare_on_toll_road: number; // Проезд по платным дорогам
  send_params: SendParams[]; // Настройки уведомлений
  allowable_subaddress: number; // Кол-во разрешённых доп. адресов
  minimum_duration: number; // Мин. аренда
  additional_payment_info: number; // Инфо по доп. платежам
  internal_number: number; // Внутренний номер заказа
  customer: Customer; // Данные покупателя
  coordinator: Coordinator; // Данные координатора
  page: number; // Текущая страница
  items_on_page: number; // Кол-во поездок на странице
  total_items: number; // Всего поездок
  page_count: number; // Кол-во страниц
  viewers: string[]; // Телефоны наблюдателей
  additional_services: AdditionalService[]; // Доп. услуги
  flexible_tariff: boolean; // Включены ли гибкие тарифы
  uuid: string; // UUID из 1С
  is_blocked_update: boolean; // Флаг редактирования онлайн
  date_change: string; // Время изменения поездки
  is_fast_booking: boolean; // Флаг быстрой подачи
}

export type TripsDtoRequest = Partial<{
  names: string;
  email: string;
  order_status: number[];
  page: number;
  limit: number;
}>;

export interface TripsGetResponse {
  orders: TripDtoResponse[];
  page_data: {
    items_on_page: number;
    total_items: number;
    page_count: number;
    page: number;
  };
}

