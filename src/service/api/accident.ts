import { api } from '../api';
import { AccidentProcessResult, LoginResponse } from './types';

/**
 * POST /v1/accident-processings/process
 * Envia imagem para análise de acidente
 */
export async function postProcessAccidentImage(image: File): Promise<AccidentProcessResult> {
  const formData = new FormData();
  formData.append('image', image);

  const response = await api.post<AccidentProcessResult>(
    '/v1/accident-processings/process',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
  return response.data;
}

/**
 * POST /v1/auth/login
 * Realiza login do usuário
 */
export async function postLogin(email: string, password: string): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/v1/auth/login', {
    email,
    password,
  });
  return response.data;
}
