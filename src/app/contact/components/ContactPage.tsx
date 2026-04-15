"use client";
import React, { useState } from "react";
import { Phone, Mail, Clock, ShieldCheck, Star, Zap, BadgeCheck } from "lucide-react";
import { z } from "zod";
import Image from "next/image";
import TurnstileWidget from "../../components/TurnstileWidget";

// ─── WhatsApp config ──────────────────────────────────────────────────────────
const PHONE_NUMBER = "+610401508036";
const WA_MESSAGE =
  "Hi! I'd like to get a free painting quote from Prisma Coatings.";

// ─── Service options ──────────────────────────────────────────────────────────
// Conversion decision: named service options let staff prioritise leads instantly
// and make the user feel the form is tailored to them, not generic.
const SERVICE_OPTIONS = [
  { value: "", label: "Select a Service (optional)" },
  { value: "Interior Painting", label: "Interior Painting" },
  { value: "Exterior Painting", label: "Exterior Painting" },
  { value: "Commercial Painting", label: "Commercial Painting" },
  { value: "Strata Painting", label: "Strata Painting" },
  { value: "Roof Painting", label: "Roof Painting" },
  { value: "Not Sure Yet", label: "Not Sure Yet – I Need Advice" },
];

// ─── Trust badges ─────────────────────────────────────────────────────────────
// Placed above the form fold to reduce hesitation before the user starts typing.
const TRUST_BADGES = [
  { icon: BadgeCheck, label: "Free Quote" },
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Zap, label: "Fast Response" },
  { icon: Star, label: "5-Star Rated" },
];

// ─── Schema ───────────────────────────────────────────────────────────────────
const ContactSchema = z.object({
  Fullname: z.string().min(2, "Please enter your full name"),
  telephone: z.string().min(6, "Please enter a valid phone number"),
  postCode: z.string().optional(),
  service: z.string().optional(),
  comments: z.string().min(5, "Please tell us a little about your project"),
  nickname: z.string().optional(), // honeypot
});

// ─── Component ────────────────────────────────────────────────────────────────
const ContactPage = () => {
  const [formData, setFormData] = useState({
    Fullname: "",
    telephone: "",
    postCode: "",
    service: "",
    comments: "",
    nickname: "", // honeypot — never shown to users
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "contact",
        event_label: "contact_page_whatsapp",
      });
    }
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage(null);
    setIsSubmitting(true);

    if (!turnstileToken) {
      setSubmitMessage({
        type: "error",
        text: "Please complete the security check.",
      });
      setIsSubmitting(false);
      return;
    }

    const parse = ContactSchema.safeParse(formData);
    if (!parse.success) {
      const fieldErrors: { [key: string]: string } = {};
      parse.error.issues.forEach((err) => {
        if (typeof err.path[0] === "string")
          fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Honeypot check — silently discard bots
    if (formData.nickname) {
      setIsSubmitting(false);
      return;
    }

    setErrors({});

    try {
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as any).gtag("event", "form_submit", {
          event_category: "lead",
          event_label: "contact_form_submission",
        });
      }

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      const result = await response.json();

      if (result.ok) {
        setSubmitMessage({
          type: "success",
          text: "Quote request sent! We'll be in touch within a few hours.",
        });
        setFormData({
          Fullname: "",
          telephone: "",
          postCode: "",
          service: "",
          comments: "",
          nickname: "",
        });
      } else {
        setSubmitMessage({
          type: "error",
          text: "Something went wrong. Please try again or call us directly.",
        });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Network error. Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTurnstileToken("");
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ── Left column: form ────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-10">

              {/* ── Headline block ─────────────────────────────────────── */}
              {/*
                Conversion decision: leading with the concrete outcome
                ("Free Painting Quote") anchors user intent immediately.
                The subline adds local relevance for SEO and trust.
              */}
              <h1 className="text-3xl sm:text-4xl font-bold text-[#13233A] leading-tight">
                Get Your Free Painting{" "}
                <span className="inline-block border-b-4 border-[#D61C1C]">
                  Quote in Sydney
                </span>
              </h1>
              <p className="mt-3 text-gray-600 text-base sm:text-lg">
                Tell us about your project and we&apos;ll get back to you fast —
                no obligation, no pressure.
              </p>

              {/* ── Trust badges ───────────────────────────────────────── */}
              {/*
                Conversion decision: four short trust signals placed
                BEFORE the form reduce the psychological cost of submitting.
                Icons make them scannable at a glance on mobile.
              */}
              <div
                className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
                aria-label="Why choose Prisma Coatings"
              >
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100"
                  >
                    <Icon
                      className="w-4 h-4 text-[#D61C1C] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── Review snippet ─────────────────────────────────────── */}
              {/*
                Conversion decision: a short social-proof line near the form
                entry point mimics a Google review summary and increases
                perceived credibility before the user types a single character.
              */}
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <div className="flex gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span>
                  Rated 5 stars by homeowners and strata managers across Sydney
                </span>
              </div>

              {/* ── Form ───────────────────────────────────────────────── */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                noValidate
              >
                {/* Success / error feedback */}
                {submitMessage && (
                  <div
                    role="alert"
                    className={`p-4 rounded-lg text-sm font-medium ${
                      submitMessage.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                {/* Row 1: Full name */}
                <div>
                  <label
                    htmlFor="Fullname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="Fullname"
                    type="text"
                    name="Fullname"
                    placeholder="e.g. Sarah Johnson"
                    value={formData.Fullname}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:border-transparent text-base"
                  />
                  {errors.Fullname && (
                    <p role="alert" className="text-red-500 text-sm mt-1">
                      {errors.Fullname}
                    </p>
                  )}
                </div>

                {/* Row 2: Phone + Postcode */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="telephone"
                      type="tel"
                      name="telephone"
                      placeholder="e.g. 0412 345 678"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:border-transparent text-base"
                    />
                    {errors.telephone && (
                      <p role="alert" className="text-red-500 text-sm mt-1">
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="postCode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Postcode{" "}
                      <span className="text-gray-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="postCode"
                      type="text"
                      name="postCode"
                      placeholder="e.g. 2000"
                      value={formData.postCode}
                      onChange={handleChange}
                      autoComplete="postal-code"
                      inputMode="numeric"
                      maxLength={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:border-transparent text-base"
                    />
                  </div>
                </div>

                {/* Row 3: Service selector */}
                {/*
                  Conversion decision: qualifying the service upfront helps
                  staff route and respond faster, and gives the user a sense
                  the form is relevant to their specific need — not generic.
                */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Needed{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:border-transparent text-base appearance-none"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label
                    htmlFor="comments"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tell Us About Your Project{" "}
                    <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    placeholder="e.g. I need the interior of a 3-bedroom house painted in Surry Hills. Looking to get it done before end of May."
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:border-transparent resize-none text-base"
                  />
                  {errors.comments && (
                    <p role="alert" className="text-red-500 text-sm mt-1">
                      {errors.comments}
                    </p>
                  )}
                </div>

                {/* Honeypot — invisible to users, visible to bots */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Turnstile captcha */}
                <div>
                  <TurnstileWidget onToken={setTurnstileToken} />
                  {errors.captcha && (
                    <p role="alert" className="text-red-500 text-sm mt-1">
                      {errors.captcha}
                    </p>
                  )}
                </div>

                {/* ── Primary CTA ──────────────────────────────────────── */}
                {/*
                  Conversion decision: action-oriented copy ("Get My Free Quote")
                  names the reward the user receives, not the action they perform.
                  Full-width on all sizes for the largest possible tap target.
                */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-8 rounded-lg text-base sm:text-lg uppercase tracking-wide transition-colors duration-200 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-[#D61C1C] hover:bg-[#B71C1C] active:bg-[#991B1B] text-white"
                  }`}
                >
                  {isSubmitting ? "Sending…" : "Get My Free Quote →"}
                </button>

                {/* ── Secondary WhatsApp CTA ───────────────────────────── */}
                {/*
                  Conversion decision: mobile users often prefer messaging over
                  form fills. Placing a WhatsApp option directly below the
                  primary CTA captures those leads without losing them to
                  the back button.
                */}
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Prefer a quick chat instead?
                  </p>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#17a550] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                    aria-label="Message Prisma Coatings on WhatsApp"
                  >
                    {/* WhatsApp icon */}
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message Us on WhatsApp
                  </button>
                </div>

                {/* Microcopy — sets expectation, reduces post-submit anxiety */}
                <p className="text-center text-xs text-gray-400">
                  We typically respond within a few hours during business hours.
                  Your details are never shared with third parties.
                </p>
              </form>
            </div>

            {/* ── Map ──────────────────────────────────────────────────── */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-100 h-72 sm:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.965535779902!2d151.10003117571074!3d-33.916286573208474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb68969aa811%3A0x38386a4ece4e5586!2sPrisma%20Coatings%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1754115675315!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prisma Coatings location in Campsie, Sydney"
              />
            </div>
          </div>

          {/* ── Right column: sidebar ───────────────────────────────────── */}
          <div className="space-y-6">

            {/* ── Talk to us box ─────────────────────────────────────── */}
            {/*
              Conversion decision: replaced the misleading "Chat Live" heading
              with an honest, direct alternative. Users who see "Chat Live"
              and then find no live chat feel deceived — that kills trust.
              Instead we frame it as a direct line to a real person.
            */}
            <div className="bg-[#13233A] rounded-xl p-7 text-white text-center">
              <div className="mb-4">
                <Image
                  src="/logo/logo.png"
                  alt="Prisma Coatings"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">
                Speak Directly with Our Team
              </h2>
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                Prefer to talk? Call us or send a WhatsApp message — we&apos;re
                happy to answer questions and give you a rough estimate on the
                spot.
              </p>

              {/* Call CTA */}
              <a
                href="tel:0401508036"
                className="flex items-center justify-center gap-2 bg-[#D61C1C] hover:bg-[#B71C1C] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm mb-3"
                aria-label="Call Prisma Coatings"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call 0401 508 036
              </a>

              {/* WhatsApp CTA */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
                aria-label="Message Prisma Coatings on WhatsApp"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </button>
            </div>

            {/* ── Contact details box ────────────────────────────────── */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-7">
              <h2 className="text-xl font-bold text-[#13233A] border-b-4 border-[#D61C1C] inline-block pb-1 mb-5">
                Contact Details
              </h2>

              <address className="not-italic space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:0401508036"
                      className="text-gray-800 font-semibold hover:text-[#D61C1C] transition-colors"
                    >
                      0401 508 036
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@prismacoatings.com.au"
                      className="text-gray-800 hover:text-[#D61C1C] transition-colors text-sm break-all"
                    >
                      info@prismacoatings.com.au
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock
                    className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
                      Business Hours
                    </p>
                    <p className="text-gray-800 text-sm">
                      Mon – Fri: 7:00 AM – 5:00 PM
                    </p>
                    <p className="text-gray-800 text-sm">Sat: 7:00 AM – 5:00 PM</p>
                    <p className="text-gray-500 text-xs mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </address>

              {/* Service area note — local SEO reinforcement */}
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Serving homeowners, strata managers, and commercial clients
                  across Sydney — including the Eastern Suburbs, Inner West,
                  North Shore, and Sutherland Shire.
                </p>
              </div>
            </div>

            {/* ── Credentials box ────────────────────────────────────── */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Why Prisma Coatings
              </p>
              <ul className="space-y-2" role="list">
                {[
                  "Fully licensed & insured (ABN 50 643 858 557)",
                  "Free, no-obligation quotes",
                  "Reliable workmanship guaranteed",
                  "House painters Sydney homeowners trust",
                  "Commercial & strata painting specialists",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <BadgeCheck
                      className="w-4 h-4 text-[#D61C1C] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
