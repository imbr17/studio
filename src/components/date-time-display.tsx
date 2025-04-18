'use client';

import { useState, useEffect } from 'react';

export function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleDateString() + ' ' + currentDateTime.toLocaleTimeString();
  return <>{formattedDateTime}</>;
}
