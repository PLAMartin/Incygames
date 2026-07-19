import type { ReactNode } from "react";
import { CheckCircleIcon } from "@/components/ui/icons";

export function SuccessMessage({ children }: { children: ReactNode }) {
  return (
    <div
      role="status"
      className="bg-success/10 text-success flex items-start gap-2 rounded-lg p-4"
    >
      <CheckCircleIcon className="mt-0.5 shrink-0" />
      <div className="text-base">{children}</div>
    </div>
  );
}
