import { useRef, useState } from "react";

const useSearchDepartments = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const timeRef = useRef<NodeJS.Timeout>(null);

  const handleSearch = (value: string) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = setTimeout(() => {
        setDebouncedSearch(value);
      }, 500);
    } else {
      timeRef.current = setTimeout(() => {
        setDebouncedSearch(value);
      }, 500);
    }
  };

  return { search, debouncedSearch, handleSearch, setSearch };
};

export default useSearchDepartments;
