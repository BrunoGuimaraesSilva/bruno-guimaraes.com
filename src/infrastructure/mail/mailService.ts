// mailService.ts
export const sendEmail = async (emailData: { name: string; email: string; message: string }) => {
    try {
      const response = await fetch('/api/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
        
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      throw new Error(error.message || 'Unknown error while sending email');
    }
  };