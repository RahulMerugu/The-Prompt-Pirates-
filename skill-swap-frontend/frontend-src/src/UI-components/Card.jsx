export function Card({ children, className = "" }) {
  return <div className={`login-card ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`login-card-content ${className}`}>{children}</div>;
}
