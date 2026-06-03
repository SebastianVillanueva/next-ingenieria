"use client";
import React from "react";

type ButtonVariant = "dark" | "outline" | "light";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "dark", href, onClick }: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    paddingLeft: "14px",
    paddingRight: "8px",
    paddingTop: "7px",
    paddingBottom: "7px",
    borderRadius: "6px",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    cursor: "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };
  const dark: React.CSSProperties = { background: "#0A0A0A", color: "#F8F7F4", border: "none" };
  const outline: React.CSSProperties = { background: "#F8F7F4", color: "#0A0A0A", border: "0.5px solid #0A0A0A" };
  const light: React.CSSProperties = { background: "#F8F7F4", color: "#0A0A0A", border: "none" };
  const variantStyle = variant === "dark" ? dark : variant === "outline" ? outline : light;
  const circle: React.CSSProperties = {
    width: "18px", height: "18px", borderRadius: "50%", background: "#C9A227",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0, fontSize: "10px", color: "#0A0A0A",
  };
  const style = { ...base, ...variantStyle };
  const inner = <>{children}<span style={circle}>→</span></>;
  if (href) return <a href={href} style={style}>{inner}</a>;
  return <button onClick={onClick} style={style}>{inner}</button>;
}
