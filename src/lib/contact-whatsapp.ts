import { brand } from "@/lib/site-content";

export type ContactFormValues = {
  name: string;
  contact: string;
  description: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

/** Digits only, with optional India country / trunk prefix stripped. */
export function normalizeIndianMobile(raw: string): string {
  let digits = raw.replace(/\D/g, "");

  if (digits.startsWith("91") && digits.length >= 12) {
    digits = digits.slice(2);
  } else if (digits.startsWith("0") && digits.length >= 11) {
    digits = digits.slice(1);
  }

  return digits;
}

export function validateContactNumber(raw: string): string | undefined {
  const trimmed = raw.trim();

  if (!trimmed) {
    return "Please enter your contact number.";
  }

  if (!/^[\d\s+\-()]+$/.test(trimmed)) {
    return "Use digits only (spaces, +, - and brackets are fine).";
  }

  const plusCount = (trimmed.match(/\+/g) ?? []).length;
  if (plusCount > 1 || (plusCount === 1 && !trimmed.trimStart().startsWith("+"))) {
    return "Place + only at the start, e.g. +91 98106 38601.";
  }

  const allDigits = trimmed.replace(/\D/g, "");
  if (allDigits.length < 10) {
    return "Contact number is too short.";
  }
  if (allDigits.length > 13) {
    return "Contact number is too long.";
  }

  const mobile = normalizeIndianMobile(trimmed);

  if (mobile.length !== 10) {
    return "Enter a valid 10-digit Indian mobile number.";
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return "Indian mobile numbers start with 6, 7, 8, or 9.";
  }

  return undefined;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const description = values.description.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (!/^[a-zA-Z\s.'-]+$/.test(name)) {
    errors.name = "Name can only include letters and spaces.";
  }

  const contactError = validateContactNumber(values.contact);
  if (contactError) {
    errors.contact = contactError;
  }

  if (!description) {
    errors.description = "Please describe your project.";
  } else if (description.length < 10) {
    errors.description = "Please share a bit more detail (at least 10 characters).";
  } else if (description.length > 1000) {
    errors.description = "Please keep the description under 1000 characters.";
  }

  return errors;
}

export function buildWhatsAppContactUrl(values: ContactFormValues) {
  const mobile = normalizeIndianMobile(values.contact);
  const contactDisplay = mobile ? `+91 ${mobile}` : values.contact.trim();

  const message = [
    "Hi Adwide Media — I'd like to discuss a project.",
    "",
    `Name: ${values.name.trim()}`,
    `Contact: ${contactDisplay}`,
    "",
    "Project:",
    values.description.trim(),
  ].join("\n");

  return `${brand.whatsappHref}?text=${encodeURIComponent(message)}`;
}
