export interface IHttpResult<T> {
  status: string;
  message: string;
  result: T;
  errors: null;
}
