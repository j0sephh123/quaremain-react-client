export interface PayloadI {
  errorType?: string;
  message?: string;
  category?: string;
}

export interface ActionI {
  type: string;
  payload: PayloadI;
}