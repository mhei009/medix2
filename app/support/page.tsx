import Header from "@/components/Header";
import PrivacyPolicy from "@/components/privacyPolicy";

const Support = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto p-4">
          <div className="sub-container max-w-[496px] mt-10">
            <h1 className="text-2xl font-bold mb-4 text-blue-500">
              Frequently Asked Questions (FAQ)
            </h1>

            <p className="mb-8">
              Welcome to the <strong>Medix</strong> FAQ section! Here, you'll
              find answers to common questions about using Medix, including how
              to manage your appointments, how the system works, and more.
            </p>

            {/* FAQ 1 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                1. What is Medix?
              </h2>
              <p>
                Medix is a healthcare booking management system designed to make
                it easy for patients to register, book, and manage appointments
                with healthcare providers. It also provides tools for
                administrators to manage schedules, send notifications, and
                handle patient appointments effectively.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                2. How does the Patient Dashboard work?
              </h2>
              <p>
                The <strong>Patient Dashboard</strong> is your central hub for
                managing appointments and other healthcare-related activities.
                With the dashboard, you can:
              </p>
              <ul className="list-disc ml-5 mt-4">
                <li>
                  **View Appointments**: See a detailed list of your upcoming,
                  pending, and past appointments.
                </li>
              </ul>
            </div>

            {/* FAQ 3 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                3. How do I log in to my account?
              </h2>
              <p>
                To log in, simply use the full name, email address, and phone
                number you registered with. This ensures that the system can
                correctly verify your identity and give you access to your
                account.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                4. How do I book an appointment?
              </h2>
              <p>
                After logging into your account, navigate to the "Book
                Appointment" section, select your healthcare provider, choose a
                date and time, and confirm your appointment. You can also book
                multiple appointments if needed.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                5. Can I manage or cancel appointments?
              </h2>
              <p>
                Yes, through the Patient Dashboard, you can cancel or reschedule
                your appointments as needed. Administrators also have the
                ability to manage, confirm, or cancel patient appointments.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                6. Will I receive notifications for my appointments?
              </h2>
              <p>
                Yes, Medix uses Twilio to send SMS notifications to patients
                when their appointments are confirmed, rescheduled, or canceled.
                You'll receive a message with all the relevant details.
              </p>
            </div>

            {/* FAQ 7 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                7. Is Medix responsive on all devices?
              </h2>
              <p>
                Absolutely! Medix is fully responsive and works smoothly on all
                devices, including smartphones, tablets, and desktop computers.
                You can manage your appointments on the go from any device.
              </p>
            </div>

            {/* FAQ 8 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                8. Can I upload documents through Medix?
              </h2>
              <p>
                Yes, Medix allows you to securely upload medical documents or
                other files related to your healthcare appointments through the
                platform using Appwrite's storage service.
              </p>
            </div>

            {/* FAQ 9 */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                9. How do I access the admin page?
              </h2>
              <p>
                The admin page is restricted to authorized users and requires a
                passcode for access. The current passcode is{" "}
                <strong>123456</strong>.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-500 mb-2">
                Privacy Policy
              </h2>

              <PrivacyPolicy />
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
