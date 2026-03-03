import { type ReactNode } from "react";

interface Props {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

const FlipCard = ({ front, back, className = "" }: Props) => {
  return (
    <div className={`group [perspective:1000px] ${className}`}>
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
