import { useEffect } from "react";

const useDeviceBackButton = (open: boolean, onClose: () => void) => {
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (open) {
        onClose(); // Close the modal
        event.preventDefault(); // Prevent the default back behavior
        window.history.pushState(null, ""); // Push state to avoid exiting the page
      }
    };

    if (open) {
      window.history.pushState(null, ""); // Push a new state to the history stack
      window.addEventListener("popstate", handlePopState); // Listen for the back button
    }

    return () => {
      window.removeEventListener("popstate", handlePopState); // Cleanup the event listener
    };
  }, [onClose, open]);
};

export default useDeviceBackButton;
