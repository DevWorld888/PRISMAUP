'use client';

import React, { useState } from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { z } from "zod";
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postCode: '',
    telephone: '',
    comments: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});


  const ContactSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    address: z.string().optional(),
    city: z.string().optional(),
    postCode: z.string().optional(),
    telephone: z.string().min(6, "Phone number is too short"),
    comments: z.string().min(10, "Message must be at least 10 characters"),
    nickname: z.string().optional(), // honeypot
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const parse = ContactSchema.safeParse(formData);
    if (!parse.success) {
      const fieldErrors: { [key: string]: string } = {};
      parse.error.issues.forEach((err) => {
        if (typeof err.path[0] === 'string') fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({}); // Clear errors
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.ok) {
      console.log('Email sent successfully');
      console.log('Form submitted:', formData);

    } else {
      console.error('Error sending email:', result.error);
    }
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

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D61C1C] hover:bg-[#B71C1C] text-white font-semibold py-4 px-8 transition-colors duration-200 uppercase tracking-wide"
                >
                  SEND MESSAGE →
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
              <button className="bg-[#D61C1C] hover:bg-[#B71C1C] text-white font-semibold py-3 px-8 rounded transition-colors duration-200 uppercase tracking-wide">
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
