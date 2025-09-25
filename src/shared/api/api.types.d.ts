declare type TResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};
declare type TResponseList<T> = {
  success: boolean;
  data: T[];
  message: string;
};
declare type TResponseListWithPage<T> = {
  success: boolean;
  data: {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
  };
  message: string;
};
declare type TResponseListWithPageGrouped<T, TGrouped> = {
  success: boolean;
  data: {
    data: T[] | TGrouped[];
    current_page: number;
    last_page: number;
    per_page: number;
  };
  message: string;
};
