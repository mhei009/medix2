import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-500": status === "scheduled",
        "bg-gray-200": status === "pending",
        "bg-red-200": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-white": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-gray-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};
