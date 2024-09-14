import { spec } from "node:test/reporters";

export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",

  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "National ID Card",
  "Driver's License",
  "Skattverket ID Card",
  "Passport",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Derek",
    specialty: "Cardiologist",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron",
    specialty: "Dermatologist",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston",
    specialty: "Endocrinologist",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Evan Peter",
    specialty: "Gastroenterologist",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jane Powell",
    specialty: "Hematologist",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alex Ramirez",
    specialty: "Nephrologist",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee",
    specialty: "Neurologist",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz",
    specialty: "Oncologist",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
    specialty: "Ophthalmologist",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
