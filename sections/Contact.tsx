"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validation";
import { SOCIAL_LINKS } from "@/constants/data";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({ resolver: zodResolver(contactFormSchema) });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (values: ContactFormSchema) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad relative bg-deep/60">
      <div className="max-shell grid lg:grid-cols-2 gap-14">
        <Reveal>
          <p className="eyebrow">let&apos;s build something</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3">
            Have a project in mind?
          </h2>
          <p className="text-white/60 mt-5 max-w-md">
            Tell me what you&apos;re building. If it needs clean React architecture, a Next.js
            frontend, or a hero section people will screenshot — I want to hear about it.
          </p>
          <div className="mt-8 space-y-4 font-mono text-sm text-white/60">
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-cyan" /> {SOCIAL_LINKS.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-cyan" /> India · Remote friendly
            </p>
          </div>
        </Reveal>

        <Reveal>
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="w-full bg-transparent border-b border-white/15 py-2 mt-1 text-sm"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  className="w-full bg-transparent border-b border-white/15 py-2 mt-1 text-sm"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Subject" error={errors.subject?.message}>
                <input
                  {...register("subject")}
                  className="w-full bg-transparent border-b border-white/15 py-2 mt-1 text-sm"
                  placeholder="What's this about?"
                />
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/15 py-2 mt-1 text-sm resize-none"
                  placeholder="Tell me a bit more…"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full py-3.5 font-medium neon-shadow disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-brand-cyan font-mono">
                  Message sent — I&apos;ll reply within a day. ✓
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-400 font-mono">
                  Something went wrong — please try again or email me directly.
                </p>
              )}
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-mono text-white/40">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
