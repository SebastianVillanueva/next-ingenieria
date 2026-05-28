"use client";
import React from "react";

type ButtonVariant = "dark" | "outline" | "light";
interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}
const variantStyles: Record<ButtonVariant, string> = {
  dark: "bg-next-black text-next-text-on-dk",
  outline: "bg-next-bg text-next-black border border-next-black",
  light: "bg-next-bg text-next-black",
};
export default function Button({ children, variant = "dark", href, onClick, className = "" }: ButtonProps) {
  const classes = `inline-flex items-center gap-3 pl-[22px] pr-[13px] py-[13px] rounded-md font-mono text-[11px] font-medium tracking-[0.12em] uppercase transition-opacity hover:opacity-85 cursor-pointer ${variantStyles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <span className="w-[26px] h-[26px] rounded-full bg-next-gold flex items-center justify-center flex-shrink-0 text-next-black text-[13px] leading-none">→</span>
    </>
  );
  if (href) {
    return <a href={href} className={classes}>{inner}</a>;
  }
  return <button onClick={onClick} className={classes}>{inner}</button>;
}