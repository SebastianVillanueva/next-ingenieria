"use client";
import { useEffect, useState } from "react";
export default function Debug() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      <p>window.innerWidth: {width}</p>
      <p>isMobile (menor 768): {width < 768 ? "SÍ" : "NO"}</p>
    </div>
  );
}
