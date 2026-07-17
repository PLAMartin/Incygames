import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { ErrorMessage } from "@/components/forms/ErrorMessage";

interface BaseProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

type InputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & { as?: "input" };

type TextareaProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & { as: "textarea" };

export function FormField(props: InputProps | TextareaProps) {
  const { id, label, error, hint, required, as = "input", ...rest } = props;
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="text-text-primary block text-sm font-medium"
      >
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="text-text-secondary mt-1 text-sm">
          {hint}
        </p>
      ) : null}
      {as === "textarea" ? (
        <textarea
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="border-border bg-surface text-text-primary mt-1.5 min-h-40 w-full rounded-md border px-3 py-2.5 text-base"
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className="border-border bg-surface text-text-primary mt-1.5 min-h-11 w-full rounded-md border px-3 py-2.5 text-base"
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error ? <ErrorMessage id={errorId}>{error}</ErrorMessage> : null}
    </div>
  );
}
