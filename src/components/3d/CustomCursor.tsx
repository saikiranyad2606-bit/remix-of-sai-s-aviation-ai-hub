import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      if (outerRef.current) {
        outerRef.current.style.left = `${e.clientX}px`;
        outerRef.current.style.top = `${e.clientY}px`;
      }
      if (innerRef.current) {
        innerRef.current.style.left = `${e.clientX}px`;
        innerRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", move);
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Outer reticle */}
      <div
        ref={outerRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-primary/40 rounded-full transition-transform duration-150 ease-out"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"
      />
    </>
  );
};

export default CustomCursor;
