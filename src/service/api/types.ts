export interface AccidentProcessResult {
  message?: string;
  code?: string;
  success?: boolean;
  status_code?: number;
  details?: {
    class?: 'severe' | 'moderate' | 'not_accident';
    confidence?: number;
    probabilities?: {
      severe?: number;
      moderate?: number;
      not_accident?: number;
    };
  };
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}
