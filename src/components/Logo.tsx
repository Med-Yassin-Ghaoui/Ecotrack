import React from 'react';
import { cn } from '../lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-8 h-8", className)}>
      <g transform="skewX(-20) translate(25, 0)">
        <rect x="5" y="10" width="45" height="40" rx="4" fill="url(#grad1)" />
        <rect x="55" y="25" width="25" height="25" rx="4" fill="#2BA4F8" />
        <rect x="25" y="55" width="25" height="25" rx="4" fill="#318BF5" />
        <rect x="55" y="55" width="45" height="40" rx="4" fill="url(#grad2)" />
      </g>
      <defs>
        <linearGradient id="grad1" x1="5" y1="10" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#28D2FF" />
          <stop offset="1" stopColor="#2BA4F8" />
        </linearGradient>
        <linearGradient id="grad2" x1="55" y1="55" x2="100" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#318BF5" />
          <stop offset="1" stopColor="#3764F2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
