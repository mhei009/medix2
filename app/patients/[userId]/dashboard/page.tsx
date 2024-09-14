"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StatCard } from "@/components/StatCard";
import {
  getPatientAppointments,
  getPatientByUserId,
} from "@/lib/actions/patient.actions";
import SignOutButton from "@/components/SignOutButton";
import { Appointment } from "@/types/appwrite.types";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Status = "scheduled" | "pending" | "cancelled";

const mapStatusToStatCardType = (
  status: Status
): "appointments" | "pending" | "cancelled" => {
  switch (status) {
    case "scheduled":
      return "appointments";
    case "pending":
      return "pending";
    case "cancelled":
      return "cancelled";
    default:
      throw new Error(`Unknown status: ${status}`);
  }
};

const PatientPage = ({ params }: { params: { userId: string } }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patientName, setPatientName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patient = await getPatientByUserId(params.userId);
        setPatientName(patient.name);
        const fetchedAppointments = await getPatientAppointments(params.userId);
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [params.userId]);

  const groupedAppointments: Record<Status, Appointment[]> = {
    scheduled: appointments.filter((a) => a.status === "scheduled"),
    pending: appointments.filter((a) => a.status === "pending"),
    cancelled: appointments.filter((a) => a.status === "cancelled"),
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      {/* Header */}
      <header className="admin-header flex items-center justify-between p-4 border-b border-gray-200">
        {/* Logo */}
        <Link href="/" className="cursor-pointer flex items-center">
          <Image
            src="/assets/icons/logo-full.webp"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white shadow-lg rounded-md mt-2"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/new-appointment"
                  className="font-bold text-green-500 hover:text-blue-500"
                >
                  Book Appointment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="font-bold text-gray-700 hover:text-blue-500"
                >
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/settings"
                  className="font-bold text-gray-700 hover:text-blue-500"
                >
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <SignOutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col md:items-end md:space-y-1">
          {/* User Info */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/user.svg"
              height={24}
              width={24}
              alt="user icon"
              className="w-6 h-6"
            />
            {patientName && (
              <p className="text-16-semibold text-blue-100">{patientName}!</p>
            )}
          </div>

          {/* Book Appointment Button */}
          <Link
            href="/new-appointment"
            className="text-green-300 text-16-semibold underline"
          >
            Book Appointment
          </Link>

          {/* Sign Out Button */}
          <SignOutButton />
        </nav>
      </header>

      <main className="admin-main p-4">
        <section className="w-full space-y-4">
          <h1 className="header text-2xl font-bold">Welcome 👋</h1>
          <p className="text-dark-700">
            Here is an overview of your upcoming and past appointments and their
            status.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {Object.keys(groupedAppointments).map((status) => {
            const statusKey = status as Status;
            return (
              <StatCard
                key={statusKey}
                type={mapStatusToStatCardType(statusKey)}
                count={groupedAppointments[statusKey].length}
                label={`${statusKey.charAt(0).toUpperCase() + statusKey.slice(1)} appointments`}
                icon={`/assets/icons/${statusKey}.svg`}
              >
                <div className="mt-4 space-y-4">
                  {groupedAppointments[statusKey].map((appointment) => (
                    <div
                      key={appointment.$id}
                      className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                    >
                      <h3 className="text-lg font-semibold">
                        {appointment.primaryPhysician}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Scheduled:{" "}
                        {new Date(appointment.schedule).toLocaleDateString()} at{" "}
                        {new Date(appointment.schedule).toLocaleTimeString()}
                      </p>

                      <p className="text-sm">Status: {appointment.status}</p>
                      {appointment.cancellationReason && (
                        <p className="text-sm text-red-600">
                          Cancellation Reason: {appointment.cancellationReason}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </StatCard>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default PatientPage;
