export type HttpResponseModel<T> = {
  Result?: T;
  Error?: string;
  Pending: boolean;
};

export interface FormConfig {
  type:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'select'
    | 'date'
    | 'time'
    | 'datetime';
  key: string;
  defaultValue?: unknown;
  required: boolean;
  title: string;
  options?: any[];
  bindLabel?: string;
}

export interface user {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}
