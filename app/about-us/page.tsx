// app/about-us/page.tsx

import Header from "@/components/Header";
import VideoSection from "@/components/VideSection";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto p-4">
          <div className="sub-container max-w-[496px] mt-10">
            <h1 className="text-2xl font-bold mb-4 text-blue-500">
              About <span className="text-green-500">Medix</span>
            </h1>
            <p>
              Welcome to the About Us page! Here you can learn more about our
              company and team.
            </p>

            <p className="mt-10">
              We're here to make managing your healthcare easier than ever!
            </p>

            <div className="text-16-regular mt-20 flex justify-between">
              <p className="text-dark-600 xl:text-left">© 2024 Medix</p>
            </div>
          </div>
        </section>
        {/* Video section is now handled in a client component */}
        <VideoSection /> {/* This maintains the layout */}
      </div>
    </>
  );
};

export default AboutUs;
