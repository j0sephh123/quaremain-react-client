export interface Payload {
  errorType?: string;
  message?: string;
  category?: string;
}

export interface Action {
  type: string;
  payload: Payload;
}
