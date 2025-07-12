import { useEffect, useState } from "react";

const useScrollStatus = (scrollContainerRef: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);
  const [hasPassedHeight, setHasPassedHeight] = useState(false);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: document.querySelector("#products-scroll-container"),
        threshold: 0, // trigger as soon as even 1px is visible
      }
    );

    const handleScroll = () => {
      if (!scrollContainerRef.current || !isInView) return;
      const elRect = scrollContainerRef.current.getBoundingClientRect();

      const container = document.querySelector("#products-scroll-container");

      if (!container) return;
      const parentRect = container.getBoundingClientRect();
      const distanceFromParentTop = elRect.top - parentRect.top;

      setHasPassedHeight(
        distanceFromParentTop < container.clientHeight / 2 - 64
      );
    };

    observer.observe(scrollContainerRef.current);

    const scrollContainer = document.querySelector(
      "#products-scroll-container"
    );
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const el = scrollContainerRef.current;
        observer.unobserve(el);
      }
      const scrollContainer = document.querySelector(
        "#products-scroll-container"
      );
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef, isInView]);

  return { isInView, hasPassedHeight };
};

export default useScrollStatus;
