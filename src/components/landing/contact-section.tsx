"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { colorClasses as c } from "@/lib/colors";
import {
  buildWhatsAppContactUrl,
  validateContactForm,
  validateContactNumber,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contact-whatsapp";
import { brand } from "@/lib/site-content";

/** Keep only characters that belong in a phone field. */
function sanitizePhoneInput(value: string) {
  return value.replace(/[^\d\s+\-()]/g, "").slice(0, 18);
}

function FlowerCross() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="shrink-0 text-white/75"
      aria-hidden
    >
      <path d="M8 5.6 11.2 2.4a1.6 1.6 0 1 1 2.26 2.26L10.4 7.9l3.06 3.06a1.6 1.6 0 1 1-2.26 2.26L8 10.16l-3.2 3.06a1.6 1.6 0 1 1-2.26-2.26L5.6 7.9 2.54 4.66a1.6 1.6 0 1 1 2.26-2.26L8 5.6z" />
    </svg>
  );
}

const emptyValues: ContactFormValues = {
  name: "",
  contact: "",
  description: "",
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="text-xs text-[#ff8f70]" role="alert">
      {message}
    </p>
  );
}

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const clearFieldError = (field: keyof ContactFormValues) => {
    if (!errors[field]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const updateField = (field: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    clearFieldError(field);
  };

  const validateFieldOnBlur = (field: keyof ContactFormValues) => {
    if (field === "contact") {
      const message = validateContactNumber(values.contact);
      setErrors((prev) => {
        const next = { ...prev };
        if (message) next.contact = message;
        else delete next.contact;
        return next;
      });
      return;
    }

    const nextErrors = validateContactForm(values);
    setErrors((prev) => {
      const next = { ...prev };
      if (nextErrors[field]) next[field] = nextErrors[field];
      else delete next[field];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = (["name", "contact", "description"] as const).find(
        (key) => nextErrors[key],
      );
      if (firstInvalid) {
        document.getElementById(`contact-${firstInvalid === "contact" ? "phone" : firstInvalid}`)?.focus();
      }
      return;
    }

    setLoading(true);
    const url = buildWhatsAppContactUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setValues(emptyValues);
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-transparent border-b pb-3 pt-1 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none transition-colors ${
      hasError ? "border-[#ff8f70] focus:border-[#ff8f70]" : "border-white/25 focus:border-white"
    }`;

  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-2 sm:px-3 md:px-4 lg:px-6 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16 ${c.bg.page}`}
    >
      <div className="relative mx-auto w-full max-w-[1920px]">
        <div className="relative -mb-10 sm:-mb-20 lg:-mb-14 flex justify-center select-none pointer-events-none z-0">
          <span
            aria-hidden
            className="font-display text-[clamp(4.5rem,13vw,11.5rem)] font-normal leading-none tracking-normal text-transparent bg-clip-text select-none text-center whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.08) 58%, rgba(0, 0, 0, 0.01) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let&apos;s Connect
          </span>
        </div>

        <Reveal
          variant="fadeUp"
          className="relative isolate z-10 w-full overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] bg-[#0c0c0c] text-white shadow-[0_32px_80px_rgba(0,0,0,0.32)]"
        >
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
            <Image
              src="/showcase/showcase.png"
              alt="Project mockups background"
              fill
              sizes="100vw"
              className="object-cover object-center scale-105 blur-[6px] opacity-75 brightness-95 contrast-110"
              priority
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.48)_0%,rgba(5,5,5,0.76)_100%)]"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] grid gap-10 px-6 pt-12 pb-14 sm:px-12 sm:pt-16 sm:pb-18 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pt-22 lg:pb-22 xl:px-20">
            <div className="flex flex-col justify-start">
              <Reveal variant="fadeUp" delay={0.06}>
                <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.08] tracking-tight text-white">
                  Got a project in
                  <br />
                  mind?
                </h2>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.12}>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base font-normal text-white/60 font-sans leading-relaxed">
                  Let&apos;s make something happen together
                </p>
              </Reveal>
            </div>

            <Reveal variant="fadeUp" delay={0.1}>
              {submitted ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-white/5 p-8 text-center backdrop-blur-sm">
                  <div className="flex size-14 items-center justify-center rounded-full bg-white text-[#111] mb-4">
                    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-normal text-white">Opening WhatsApp</h3>
                  <p className="mt-2 text-sm text-white/70 max-w-sm">
                    Your project details are ready to send to {brand.phone}. If WhatsApp didn&apos;t open,{" "}
                    <a
                      href={buildWhatsAppContactUrl(values)}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:text-white"
                    >
                      tap here to continue
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 rounded-full bg-white/10 px-6 py-2.5 text-xs uppercase tracking-wider text-white hover:bg-white/20 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-7">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm sm:text-[0.9375rem] font-medium text-white/90"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => validateFieldOnBlur("name")}
                      placeholder="Enter your Name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={inputClass(Boolean(errors.name))}
                    />
                    <div id="contact-name-error">
                      <FieldError message={errors.name} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm sm:text-[0.9375rem] font-medium text-white/90"
                    >
                      Your Contact
                    </label>
                    <input
                      id="contact-phone"
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={values.contact}
                      onChange={(e) => updateField("contact", sanitizePhoneInput(e.target.value))}
                      onBlur={() => validateFieldOnBlur("contact")}
                      placeholder="+91 98106 38601"
                      maxLength={18}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={
                        errors.contact ? "contact-phone-error" : "contact-phone-hint"
                      }
                      className={inputClass(Boolean(errors.contact))}
                    />
                    {errors.contact ? (
                      <div id="contact-phone-error">
                        <FieldError message={errors.contact} />
                      </div>
                    ) : (
                      <p id="contact-phone-hint" className="text-xs text-white/40">
                        10-digit Indian mobile, with or without +91
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-description"
                      className="block text-sm sm:text-[0.9375rem] font-medium text-white/90"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="contact-description"
                      name="description"
                      rows={2}
                      value={values.description}
                      onChange={(e) => updateField("description", e.target.value)}
                      onBlur={() => validateFieldOnBlur("description")}
                      placeholder="Type Here..."
                      maxLength={1000}
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={errors.description ? "contact-description-error" : undefined}
                      className={`resize-none ${inputClass(Boolean(errors.description))}`}
                    />
                    <div id="contact-description-error">
                      <FieldError message={errors.description} />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-[#e5e5e5] py-3.5 sm:py-4 px-8 text-center text-sm sm:text-base font-semibold text-[#111111] shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-white hover:shadow-[0_6px_26px_rgba(255,255,255,0.18)] active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      {loading ? "Opening WhatsApp..." : "Send Now!"}
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>

          <div className="relative w-full overflow-hidden border-t border-white/10 pt-6 pb-7 sm:pt-8 sm:pb-9 bg-black/40 backdrop-blur-[2px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c0c0c] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0c0c0c] to-transparent z-10" />

            <div className="marquee-track flex w-max items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform px-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="inline-flex items-center gap-8 sm:gap-12">
                  <a
                    href={brand.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-lg sm:text-2xl md:text-3xl font-normal text-white tracking-normal transition-opacity hover:opacity-80"
                  >
                    {brand.phone}
                  </a>
                  <FlowerCross />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
