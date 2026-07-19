import {
  CheckCircleIcon,
  ScienceIcon,
  HourglassTopIcon,
  ConstructionIcon,
  PauseCircleIcon,
} from "@/components/ui/icons";
import { PRODUCT_STAGE_LABELS, type ProductStage } from "@/types";

// A single neutral treatment for every stage — text + icon carry the
// distinction, not colour, so no stage reads as a red/amber/green health
// signal (spec section 6: status must not rely on colour alone, and must
// not imply failure or operational health).
const STAGE_ICONS: Record<ProductStage, typeof CheckCircleIcon> = {
  "live-beta": CheckCircleIcon,
  "seeking-pilot-users": HourglassTopIcon,
  prototype: ScienceIcon,
  "early-development": ConstructionIcon,
  "in-development": ConstructionIcon,
  paused: PauseCircleIcon,
};

export function ProductStatusBadge({
  stage,
  hiddenSupportingText,
}: {
  stage: ProductStage;
  hiddenSupportingText?: string;
}) {
  const Icon = STAGE_ICONS[stage];

  return (
    <span className="border-border bg-background-secondary text-text-primary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium">
      <Icon />
      {PRODUCT_STAGE_LABELS[stage]}
      {hiddenSupportingText ? (
        <span className="sr-only"> — {hiddenSupportingText}</span>
      ) : null}
    </span>
  );
}
