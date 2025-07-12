import { useState } from "react";

const useSearchDepartments = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleSearch = (value: string) => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(value);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  return { search, debouncedSearch, handleSearch, setSearch };
};

export default useSearchDepartments;
