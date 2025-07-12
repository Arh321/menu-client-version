import clsx from "clsx";
import { memo } from "react";
const InfiniteMarquee = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden bg-transparent text-white",
        className
      )}
    >
      <div className="animate-marquee flex whitespace-nowrap gap-2 w-max">
        <span className="whitespace-nowrap">{text}</span>
        <span className="whitespace-nowrap">{text}</span>
      </div>
    </div>
  );
};

const MemoizedInfiniteMarquee = memo(InfiniteMarquee);

export default MemoizedInfiniteMarquee;
