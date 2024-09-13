import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/lib/utils";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { useState, useEffect } from "react";

// defining appointment and doctor types
type Doctor = {
  id: string;
  name: string;
  image: string;
};

type Appointment = {
  id: string;
  schedule: string;
  primaryPhysician: Doctor;
};

const LoggedInDashboard = ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //  appointments fetching
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const result = await getAppointment(userId);
        setAppointments(result);
      } catch (err) {
        setError("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [userId]);

  if (loading) {
    return <p>Loading your appointments...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="appointments-list w-full">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.webp"
            height={1000}
            width={1000}
            alt="CarePluse logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your Booked <span className="text-green-500">Appointments</span>
          </h2>
        </section>

        {/* appointments list */}
        {appointments.length > 0 ? (
          <section className="appointments">
            {appointments.map((appointment) => {
              const doctor = appointment.primaryPhysician;
              return (
                <div
                  key={appointment.id}
                  className="appointment-card flex flex-col border p-4 mb-4"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={doctor.image}
                      alt={`Doctor ${doctor.name}`}
                      width={100}
                      height={100}
                      className="size-6"
                    />
                    <div>
                      <p className="font-semibold">Dr. {doctor.name}</p>
                      <p className="text-sm">
                        {formatDateTime(appointment.schedule).dateTime}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        ) : (
          <p>No appointments booked yet.</p>
        )}

        <div className="mt-4 space-y-4">
          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={`/patients/${userId}/new-appointment`}>
              Book a New Appointment
            </Link>
          </Button>

          <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={`/`}>Back to Home Page</Link>
          </Button>
        </div>

        <p className="mt-10 text-center text-sm text-dark-600">
          © 2024 CarePluse
        </p>
      </div>
    </div>
  );
};

export default LoggedInDashboard;
