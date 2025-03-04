import { createContext, useContext, useState } from "react";
import { toaster } from "@presentation/ui/toaster";
import { sendEmail } from "@infra/mail/mailService";

type SendMailProps = { name: string; email: string; message: string };

type MailContextType = {
  sendMail: (data: SendMailProps) => Promise<void>;
  isSending: boolean;
  successMessage: string | null;
  errorMessage: string | null;
};

const MailContext = createContext<MailContextType | undefined>(undefined);

export const MailProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendMail = async (data: SendMailProps) => {
    setIsSending(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      await sendEmail(data);
      setSuccessMessage("Email sent successfully!");
      toaster.create({ title: "Email sent successfully!", type: "success" });
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "An error occurred";
      setErrorMessage(errorMsg);
      toaster.create({ title: "Failed to send email", type: "error" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <MailContext.Provider
      value={{ sendMail, isSending, successMessage, errorMessage }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMail = () => {
  const context = useContext(MailContext);
  if (!context) throw new Error("useMail must be used within MailProvider");
  return context;
};
