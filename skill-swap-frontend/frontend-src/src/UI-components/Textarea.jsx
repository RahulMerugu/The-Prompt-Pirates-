import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      rows={4}
      className={`textarea ${className}`}
    />
  );
}
