import { useEffect, useState } from "react";

const useHandleProductsScrolling = (
  setSelectedCategory: React.Dispatch<React.SetStateAction<number | null>>,
  isCatsLoaded: boolean
) => {
  const [isManualScroll, setIsManualScroll] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isManualScroll || !isCatsLoaded) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const catId = entry.target.getAttribute("data-category-id");
            setSelectedCategory(Number(catId));
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll("[data-category-id]");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [isManualScroll, isCatsLoaded]);

  return {
    isManualScroll,
    setIsManualScroll,
  };
};

export default useHandleProductsScrolling;
