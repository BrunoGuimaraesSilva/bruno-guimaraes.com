import { AxiosHttpClient } from "@infra/http/axios-http-client/axios-http-client";
import { HttpStatusCode } from "src/data/protocols/http";

const httpClient = new AxiosHttpClient();

export const sendEmail = async (emailData: { name: string; email: string; message: string }) => {
  try {
    const response = await httpClient.post({
      url: '/api/mail/send',
      body: emailData,
    });

    if (response.status === HttpStatusCode.ok) {
      return response.body;
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error: any) {
    console.error('Error sending email:', error);
    throw new Error(error.message || 'Unknown error while sending email');
  }
};
