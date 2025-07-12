import React from "react";

export function Avatar({ children, className = "" }) {
  return (
    <div className={`avatar ${className}`}>
      {children}
    </div>
  );
}
