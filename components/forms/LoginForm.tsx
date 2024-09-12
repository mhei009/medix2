"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { PatientFormValidation } from "@/lib/validation";

// prop type for setShowLogin
type LoginFormProps = {
  setShowLogin: (showLogin: boolean) => void;
};

const LoginForm = ({ setShowLogin }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PatientFormValidation>) => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(
          "Magic login link has been sent to your email. Please check your inbox."
        );
      } else {
        setMessage(
          result.message || "Error sending magic link. Please try again."
        );
      }
    } catch (error) {
      setMessage("Error sending magic link. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="remove-scrollbar container my-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-sm w-full"
        >
          <h1 className="text-2xl font-semibold text-center">
            Login with Magic Link
          </h1>

          {/* email input */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email address"
            placeholder="johndoe@example.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          {/* submit btn */}
          <SubmitButton isLoading={isLoading}>Send Magic Link</SubmitButton>

          <div className="flex flex-col items-center mt-6">
            <p>Not a member?</p>

            <button
              onClick={() => setShowLogin(false)}
              className="text-green-500 mb-2 xl:mb-0"
            >
              Register here
            </button>
          </div>

          {message && <p className="text-center text-sm mt-2">{message}</p>}
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
