"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

type FieldWrapperProps = {
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: (id: string, describedBy: string | undefined) => React.ReactNode;
};

function FieldWrapper({ label, error, optional, className, children }: FieldWrapperProps) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-ink-200 text-sm font-medium">
        {label}
        {optional && <span className="text-ink-600 ml-1.5 font-normal">(optional)</span>}
      </label>
      {children(id, errorId)}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-sm border bg-base-900 px-4 py-3 text-sm text-ink-50 placeholder:text-ink-600 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 min-h-12";

function borderClass(hasError?: string) {
  return hasError ? "border-red-500/60 focus:border-red-500" : "border-line-400 focus:border-accent-500";
}

export function TextField({
  label,
  error,
  optional,
  className,
  ...rest
}: Omit<FieldWrapperProps, "children"> &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "className"> & { className?: string }) {
  return (
    <FieldWrapper label={label} error={error} optional={optional} className={className}>
      {(id, describedBy) => (
        <input
          id={id}
          className={cn(inputBase, borderClass(error))}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...rest}
        />
      )}
    </FieldWrapper>
  );
}

export function TextareaField({
  label,
  error,
  optional,
  className,
  ...rest
}: Omit<FieldWrapperProps, "children"> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className"> & {
    className?: string;
  }) {
  return (
    <FieldWrapper label={label} error={error} optional={optional} className={className}>
      {(id, describedBy) => (
        <textarea
          id={id}
          rows={5}
          className={cn(inputBase, borderClass(error), "resize-none")}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...rest}
        />
      )}
    </FieldWrapper>
  );
}

export function SelectField({
  label,
  error,
  optional,
  className,
  options,
  placeholder,
  ...rest
}: Omit<FieldWrapperProps, "children"> &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id" | "className"> & {
    className?: string;
    options: readonly string[];
    placeholder: string;
  }) {
  return (
    <FieldWrapper label={label} error={error} optional={optional} className={className}>
      {(id, describedBy) => (
        <select
          id={id}
          className={cn(inputBase, borderClass(error))}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </FieldWrapper>
  );
}

export function CheckboxField({
  label,
  error,
  className,
  ...rest
}: {
  label: React.ReactNode;
  error?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "className">) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          className="border-line-400 accent-accent-500 mt-0.5 h-5 w-5 shrink-0 rounded-xs"
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          {...rest}
        />
        <label htmlFor={id} className="text-ink-400 text-sm leading-relaxed">
          {label}
        </label>
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
