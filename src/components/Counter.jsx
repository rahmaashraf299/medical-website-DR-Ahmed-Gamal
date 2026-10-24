import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ target, duration = 1.5, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      // Extract numeric part from target
      const end = parseInt(target.toString().replace(/[^0-9]/g, ''), 10);
      if (isNaN(end) || end === 0) {
        setCount(target);
        return;
      }

      const totalDurationMs = duration * 1000;
      const steps = 60; // 60 FPS update rate
      const stepTime = totalDurationMs / steps;
      const incrementPerStep = end / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const nextValue = Math.round(incrementPerStep * currentStep);
        
        if (currentStep >= steps || nextValue >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(nextValue);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
