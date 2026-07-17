import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { ReactNode } from "react";

export function SuccessMessage({ children }: { children: ReactNode }) {
  return (
    <div
      role="status"
      className="bg-success/10 text-success flex items-start gap-2 rounded-lg p-4"
    >
      <CheckCircleIcon aria-hidden="true" />
      <div className="text-base">{children}</div>
    </div>
  );
}
