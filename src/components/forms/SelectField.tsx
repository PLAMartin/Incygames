import type { SelectHTMLAttributes } from "react";
import { ErrorMessage } from "@/components/forms/ErrorMessage";

export function SelectField({
  id,
  label,
  error,
  required,
  options,
  placeholder,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  options: readonly string[];
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id">) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="text-text-primary block text-sm font-medium"
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <select
        id={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className="border-border bg-surface text-text-primary mt-1.5 min-h-11 w-full rounded-md border px-3 py-2.5 text-base"
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <ErrorMessage id={errorId}>{error}</ErrorMessage> : null}
    </div>
  );
}
