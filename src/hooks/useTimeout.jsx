import { useEffect, useRef } from "react";

export default function useTimeout(callback, delay, validation = true) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, validation]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay or validation is false.
    if (delay === null || !validation) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay, validation]);
}
