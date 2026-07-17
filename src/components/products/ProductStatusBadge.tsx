import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScienceIcon from "@mui/icons-material/Science";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ConstructionIcon from "@mui/icons-material/Construction";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import InventoryIcon from "@mui/icons-material/Inventory2";
import type SvgIcon from "@mui/material/SvgIcon";
import { PRODUCT_STATUS_LABELS, type ProductStatus } from "@/types";

type IconComponent = typeof SvgIcon;

const STATUS_STYLES: Record<
  ProductStatus,
  { className: string; Icon: IconComponent }
> = {
  available: { className: "bg-success/10 text-success", Icon: CheckCircleIcon },
  beta: { className: "bg-accent/10 text-accent", Icon: ScienceIcon },
  waitlist: { className: "bg-warning/10 text-warning", Icon: HourglassTopIcon },
  prototype: {
    className: "bg-warning/10 text-warning",
    Icon: ConstructionIcon,
  },
  "in-development": {
    className: "bg-warning/10 text-warning",
    Icon: ConstructionIcon,
  },
  experiment: { className: "bg-accent/10 text-accent", Icon: ScienceIcon },
  paused: {
    className: "bg-text-secondary/10 text-text-secondary",
    Icon: PauseCircleIcon,
  },
  retired: {
    className: "bg-text-secondary/10 text-text-secondary",
    Icon: InventoryIcon,
  },
};

export function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const { className, Icon } = STATUS_STYLES[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${className}`}
    >
      <Icon fontSize="small" aria-hidden="true" />
      {PRODUCT_STATUS_LABELS[status]}
    </span>
  );
}
