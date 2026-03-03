import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  intensity?: number;
}

const Tilt3DCard = ({ children, className = "", glowOnHover = true, intensity = 15 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
      transition: "transform 0.1s ease-out",
      ...(glowOnHover
        ? {
            boxShadow: `${(x - centerX) * 0.05}px ${(y - centerY) * 0.05}px 30px -5px hsla(195, 100%, 42%, 0.2)`,
          }
        : {}),
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
      boxShadow: "none",
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Tilt3DCard;
