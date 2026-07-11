import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Please enter a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
