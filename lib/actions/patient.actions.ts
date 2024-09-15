"use server";

import { ID, InputFile, Query } from "node-appwrite";
import { Appointment, Patient } from "@/types/appwrite.types";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);
      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      const inputFile = InputFile.fromBlob(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string
      );
      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};

// get patient by userId
export const getPatientByUserId = async (userId: string): Promise<Patient> => {
  try {
    console.log("Fetching patient for userId:", userId);

    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", userId)] // find the patient with the given userId
    );

    if (!patients.documents || patients.documents.length === 0) {
      throw new Error("No patient found for the given userId.");
    }

    return patients.documents[0] as Patient;
  } catch (error) {
    console.error("Error fetching patient:", error);
    throw error;
  }
};

// Fetch appointments for the patient based on userId
export const getPatientAppointments = async (
  userId: string
): Promise<Appointment[]> => {
  try {
    const patient = await getPatientByUserId(userId);
    const patientId = patient.$id;
    console.log("Found patientId:", patientId);

    // fetch all appointments for the patient
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.equal("patient", patientId), Query.orderDesc("$createdAt")]
    );

    console.log("Appointments fetched from Appwrite:", appointments);

    if (!appointments.documents || !Array.isArray(appointments.documents)) {
      console.log("No appointments found.");
      return [];
    }

    const filteredAppointments = (
      appointments.documents as Appointment[]
    ).filter((appointment) =>
      ["scheduled", "pending", "cancelled"].includes(appointment.status)
    );

    return filteredAppointments;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};
