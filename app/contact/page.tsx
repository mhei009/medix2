"use client"; // Ensure this is a Client Component

import React from 'react';
import Header from '@/components/Header';

const Contact = () => {
  return (
    <>
      <Header />
      {/* Main container with scrolling enabled */}
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen overflow-auto pt-20 md:pt-0">
        {/* Contact Information Section */}
        <section className="container mx-auto p-4 md:w-1/2 flex flex-col justify-center">
          <div className="max-w-[496px] mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-blue-500">
              Contact <span className="text-green-500">Medix</span>
            </h1>
            <p>We'd love to hear from you! Here's how you can reach us:</p>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Email</h2>
              <p className="text-gray-700">info@medix.com</p>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-900">Phone</h2>
              <p className="text-gray-700">+123-456-7890</p>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-900">Office Address</h2>
              <p className="text-gray-700">1234 Medix Lane, Suite 100<br />Medix City, MX 56789</p>
            </div>

            <div className="text-16-regular mt-20 flex justify-between">
              <p className="text-dark-600 xl:text-left">© 2024 Medix</p>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <div className="container mx-auto p-4 md:w-1/2 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108938.63939242373!2d74.27457640628536!3d31.432512534029463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906ffbed5423f%3A0xe42acafa4763a61f!2sAwan%20Market%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sse!4v1725552001456!5m2!1sen!2sse"
            width="100%"
            height="400"
            style={{ border: 0 }}
           
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
