"use client";

import { useState } from "react";
import { PatientForm } from "@/components/forms/PatientForm";
import Header from "@/components/Header";
import { PasskeyModal } from "@/components/PasskeyModal";

import Link from "next/link";
import LoginForm from "@/components/forms/LoginForm";
import VideoSection from "@/components/VideSection";

const Home = ({ searchParams }: { searchParams: { admin?: string } }) => {
  const isAdmin = searchParams?.admin === "true";

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header />
      <div className="flex h-screen max-h-screen">
        {isAdmin && <PasskeyModal />}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px] mt-14">
            {/* setShowLogin to LoginForm */}
            {showLogin ? (
              <LoginForm setShowLogin={setShowLogin} />
            ) : (
              <PatientForm />
            )}

            <div className="flex flex-col items-center mt-6">
              {showLogin ? (
                <>
                  <div className="flex flex-col items-center mt-6"></div>
                </>
              ) : (
                <>
                  <p>Already a member?</p>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-green-500 mb-2 xl:mb-0"
                  >
                    Login here
                  </button>
                </>
              )}
            </div>

            <div className="text-16-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 Medix
              </p>
              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
        {/* client-side video component */}
        <VideoSection />
      </div>
    </>
  );
};

export default Home;
