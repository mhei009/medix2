"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = () => {
    console.log("Signing out...");
    router.push("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="text-sm font-semibold text-white underline focus:outline-none"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
