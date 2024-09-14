export type Status = "scheduled" | "pending" | "cancelled";

export interface Appointment {
  $id: string;
  primaryPhysician: string;
  schedule: string; // or Date, depending on your data
  status: Status;
  cancellationReason?: string;
  note: string;
}
