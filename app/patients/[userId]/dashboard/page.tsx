"use client";

import { useEffect, useState } from "react";
import { getPatientAppointments } from "@/lib/actions/patient.actions"; // Import the action
import { Appointment } from "@/types/appwrite.types"; // Import Appointment type

const PatientPage = ({ params }: { params: { userId: string } }) => {
  const [appointments, setAppointments] = useState<Appointment[] | null>(null); // Declare state for appointments
  const [loading, setLoading] = useState(true); // Declare state for loading
  const [error, setError] = useState<string | null>(null); // Error handling

  // Extract userId from params
  const { userId } = params;

  useEffect(() => {
    const fetchAppointments = async () => {
      console.log("Fetching appointments for userId:", userId); // Log userId

      if (!userId) {
        setError("No user ID provided");
        console.error("No user ID found");
        return;
      }

      try {
        const data = await getPatientAppointments(userId); // Fetch appointments using userId
        console.log("Fetched Appointments:", data); // Log appointments
        setAppointments(data); // Set the fetched appointments in the state
      } catch (error) {
        setError("Failed to fetch appointments");
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchAppointments();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>; // Display any errors
  }

  if (!appointments || appointments.length === 0) {
    return <p>No scheduled appointments found.</p>;
  }

  return (
    <div>
      <h1>Patient Appointments</h1>
      {appointments.map((appointment) => (
        <div key={appointment.$id}>
          <p>Appointment with {appointment.primaryPhysician}</p>
          <p>Status: {appointment.status}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientPage;
