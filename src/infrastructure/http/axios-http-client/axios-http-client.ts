import axios, { AxiosInstance } from 'axios';
import { HttpPostClient, HttpPostParams, HttpResponse, HttpStatusCode } from 'src/data/protocols/http';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    });
  }

  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    try {
      const response = await this.axiosInstance.post(params.url, params.body);
      return {
        status: response.status,
        body: response.data,
      };
    } catch (error: any) {
      console.error('Axios error:', error);
      return {
        status: error.response?.status || HttpStatusCode.serverError,
        body: error.response?.data || 'An error occurred',
      };
    }
  }
}