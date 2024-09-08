// app/page.tsx (or app/home.tsx depending on your routing)

import { PatientForm } from "@/components/forms/PatientForm";
import Header from "@/components/Header";
import { PasskeyModal } from "@/components/PasskeyModal";
import VideoSection from "@/components/VideSection";

import Link from "next/link";

const Home = ({ searchParams }: { searchParams: { admin?: string } }) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <>
      <Header />
      <div className="flex h-screen max-h-screen">
        {isAdmin && <PasskeyModal />}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px] mt-14">
            <PatientForm />
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
        {/* Include the client-side video component here */}
        <VideoSection /> {/* This ensures the layout stays the same */}
      </div>
    </>
  );
};

export default Home;
