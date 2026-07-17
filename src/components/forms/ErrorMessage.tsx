import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";

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
      <ErrorOutlineIcon fontSize="inherit" aria-hidden="true" />
      {children}
    </p>
  );
}
