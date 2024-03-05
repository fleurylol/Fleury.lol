'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useState, useEffect } from 'react';

const MiloPage = () => {
  const initialCounter = Number(localStorage.getItem('counter')) || 17;
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    const checkAndUpdateCounter = () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const hour = today.getHours();
      // In JavaScript, 1 represents Monday and 12 represents noon
      if (dayOfWeek === 1 && hour === 12) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    checkAndUpdateCounter(); // Call once immediately

    const intervalId = setInterval(checkAndUpdateCounter, 60 * 60 * 1000); // Call every hour

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Update localStorage whenever count changes
    localStorage.setItem('counter', count.toString());
  }, [count]);

  return <div>Milo Monday # {count}</div>;
};

export default MiloPage;
