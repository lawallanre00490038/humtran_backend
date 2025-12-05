import { Resend } from "resend";

// -----------------------------
// TYPES
// -----------------------------
export interface SendMailOptions {
  subject: string;
  to: string;
  token: string;
}

// -----------------------------
// MAIL UTILITY
// -----------------------------
export class MailUtil {
  private resend: Resend;

  constructor(apiKey: string, private readonly fromEmail: string) {
    if (!apiKey) console.warn("⚠️ RESEND_API_KEY is missing!");

    this.resend = new Resend(apiKey);
  }


  // Send email using Resend
  async sendMail(options: SendMailOptions): Promise<void> {
    const { subject, to, token} = options;

    try {

      const { error } = await this.resend.emails.send({
        from: "HumGuard <noreply@genaigov.ai>",
        html: `<p>Verify with this token: <strong>${token}</strong></p>`,
        subject: subject,
        to: to,
      });

      if (error) {
        console.error(`❌ Failed to send email to ${to}:`, error);
        throw new Error(error.message);
      }

      console.log(`📨 Email successfully sent to ${to}`);
    } catch (err) {
      console.error(`❌ Email sending failed:`, err);
      throw new Error("Failed to send email");
    }
  }
}
