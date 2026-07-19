import { ErrorOutlineIcon } from "@/components/ui/icons";

export function ErrorMessage({
  id,
  children,
}: {
  id?: string;
  children: string;
}) {
  return (
    <p
      id={id}
      role="alert"
      className="text-error mt-1 flex items-center gap-1.5 text-sm"
    >
      <ErrorOutlineIcon />
      {children}
    </p>
  );
}
