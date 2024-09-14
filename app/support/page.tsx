import Header from "@/components/Header";

const Support = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto p-4">
          <div className="sub-container max-w-[496px] mt-10">
            <h1 className="text-2xl font-bold mb-4 text-blue-500">
              How <span className="text-green-500">Medix</span> works?
            </h1>

            <p className="mb-8">
              Welcome to <strong>Medix</strong>, a booking management system for
              Healthcare that empowers patients and administrators with features
              like appointment scheduling, management, and more.
            </p>

            {/* FAQ Section */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                1. What is Medix?
              </h2>
              <p>
                Medix is a healthcare booking management system that allows
                patients to easily register, book, and manage appointments with
                their healthcare providers. It includes features like
                appointment confirmation, cancellation, SMS notifications, and
                file upload via Appwrite.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                2. What technologies does Medix use?
              </h2>
              <p>Medix is built with the following technologies:</p>
              <ul className="list-disc ml-5">
                <li>Appwrite for backend services</li>
                <li>Twilio for SMS notifications</li>
                <li>TypeScript for application development</li>
                <li>Tailwind CSS for styling</li>
                <li>Shadcn for reusable components</li>
                <li>Sentry for performance monitoring and error tracking</li>
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                3. How do I log in to my account?
              </h2>
              <p>
                To log back into your account, please enter the exact full name,
                email address, and phone number you used during registration.
                This ensures the system can correctly identify and authenticate
                your credentials.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                4. How do I book an appointment?
              </h2>
              <p>
                To book an appointment, simply sign up as a patient, log into
                your account, and choose your preferred healthcare provider. You
                can then select an available time slot and confirm your
                appointment. You may book multiple appointments if needed.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                5. Can I manage my appointments?
              </h2>
              <p>
                Yes, patients can manage their appointments through the
                platform. Administrators can also view and manage all scheduled
                appointments, confirm appointment times, or cancel appointments
                as needed.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                6. Do I receive a notification when my appointment is confirmed?
              </h2>
              <p>
                Yes, Medix uses Twilio to send SMS notifications to patients
                when their appointment is confirmed. You will receive a text
                message with your appointment details.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                7. Is the app responsive?
              </h2>
              <p>
                Absolutely. Medix is fully responsive and works seamlessly on
                all device types, including smartphones, tablets, and desktops.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                8. Can I upload documents?
              </h2>
              <p>
                Yes, you can securely upload files through the app using
                Appwrite’s storage service. This feature allows you to store
                important medical documents related to your appointments.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                9. How does Medix ensure performance and error tracking?
              </h2>
              <p>
                Medix uses Sentry for performance tracking and error detection,
                ensuring that the application runs smoothly and any issues are
                quickly identified and resolved.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                10. How do I access the admin page?
              </h2>
              <p>
                The admin page is restricted and requires a passcode for access.
                The passcode is <strong>123456</strong>.
              </p>
            </div>

            <div className="text-16-regular mt-20 flex justify-between">
              <p className="text-dark-600 xl:text-left">© 2024 Medix</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Support;
