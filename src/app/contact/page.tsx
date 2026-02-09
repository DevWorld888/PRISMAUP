'use client';

import React, { useState,useRef } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha"
import { z } from "zod";
import Image from 'next/image';

const ContactPage = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    Fullname: '',
    postCode: '',
    telephone: '',
    comments: '',
    nickname: '' // honeypot field
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const phoneNumber = "+610401508036"; // Formato: código de país + número sin espacios ni símbolos
  const message = "¡Hi! I am interested in learning more about your painting services.";

  const ContactSchema = z.object({
    Fullname: z.string().min(2, "Full name is required"),
    postCode: z.string().optional(),
    telephone: z.string().min(6, "Phone number is too short"),
    comments: z.string().min(10, "Message must be at least 10 characters"),
    nickname: z.string().optional(), // honeypot
  });

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages and set loading state
    setSubmitMessage(null);
    setIsSubmitting(true);
     if (!captchaToken) {
      setErrors({ captcha: "Please complete the CAPTCHA" });
      setIsSubmitting(false);
      return;
     }
    // Validate form data with Zod
    const parse = ContactSchema.safeParse(formData);
    if (!parse.success) {
      const fieldErrors: { [key: string]: string } = {};
      parse.error.issues.forEach((err) => {
        if (typeof err.path[0] === 'string') fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Check honeypot - if filled, it's likely a bot
    if (formData.nickname) {
      setIsSubmitting(false);
      return; // Silently reject spam
    }

    setErrors({}); // Clear errors
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, captchaToken })
      });

      const result = await response.json();
      
      if (result.ok) {
        setSubmitMessage({ 
          type: 'success', 
          text: 'Message sent successfully! We will get back to you soon.' 
        });
        // Reset form after successful submission
        setFormData({
          Fullname: '',
          postCode: '',
          telephone: '',
          comments: '',
          nickname: ''
        });
        setCaptchaToken(null); // Reset CAPTCHA
        recaptchaRef.current?.reset(); // Reset CAPTCHA visual state
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: 'Failed to send message. Please try again or contact us directly.' 
        });
        // Reset CAPTCHA on network error
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
      // Reset CAPTCHA on network error
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  

  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white">
              <h2 className="text-3xl font-bold text-[#13233A] mb-2 border-b-4 border-[#D61C1C] inline-block pb-1">
                Send a Message
              </h2>

              {/* Move the text above the form */}
              <div className="mt-4 text-center text-gray-600 text-sm">
                <p className="font-medium">Free Quote – No Obligation – Reply Within 24h</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {/* Success/Error Message */}
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    <p className="font-medium">{submitMessage.text}</p>
                  </div>
                )}

                <div className="grid  gap-6 w-full">
                  <div>
                    <input
                      type="text"
                      name="Fullname"
                      placeholder="Full Name *"
                      value={formData.Fullname}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.Fullname && (
                      <p className="text-red-500 text-sm mt-1">{errors.Fullname }</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="postCode"
                      placeholder="Post Code"
                      value={formData.postCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="Telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.telephone && (
                      <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    name="comments"
                    placeholder="Additional Comments / Question ?"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  {errors.comments && (
                    <p className="text-red-500 text-sm mt-1">{errors.comments}</p>
                  )}
                </div>

                {/* Honeypot field - hidden from users but visible to bots */}
                <div style={{ display: 'none' }}>
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={handleCaptchaChange}
                    className="g-recaptcha"
                  />
                </div>
                {errors.captcha && (
                  <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-8 transition-colors duration-200 uppercase tracking-wide ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : 'bg-[#D61C1C] hover:bg-[#B71C1C] text-white'
                  }`}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
              </form>

              {/* Map */}
              <div className="mt-12">
                <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.965535779902!2d151.10003117571074!3d-33.916286573208474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb68969aa811%3A0x38386a4ece4e5586!2sPrisma%20Coatings%20Pty%20Ltd!5e0!3m2!1sen!2sau!4v1754115675315!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Boxes */}
          <div className="space-y-8">
            {/* Chat Live Box */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Chat Live With a Prisma Coatings Expert
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We will help you with all your painting and renovation questions.
              </p>
              <button 
              onClick={handleButtonClick}
              className="bg-[#D61C1C] hover:bg-[#B71C1C] text-white font-semibold py-3 px-8 rounded transition-colors duration-200 uppercase tracking-wide">
                CONTACT US →
              </button>
              <div className="mt-6">
                <Image
                  src="/logo/logo.png"
                  alt="Chat Icon"
                  width={128}
                  height={128}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Contact Info Box */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#13233A] mb-2 border-b-4 border-[#D61C1C] inline-block pb-1">
                Contact us
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#13233A]" />
                  <span className="text-gray-700" ><a href="tel:0401508036">Phone: 0401508036</a></span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#13233A]" />
                  <span className="text-gray-700"><a href="mailto:prismacoating@gmail.com">Email: prismacoating@gmail.com</a></span>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#13233A]" />
                    <span className="text-gray-700">Mon-Fri: 7 AM - 5 PM </span>
                  </div>

                  <div className="flex items-center space-x-3 ml-8">
                    <span className="text-gray-700">Sat: 7 AM - 5 PM </span>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
