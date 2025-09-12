"use client";

import { useEffect, useState } from "react";

interface HydrationBoundaryProps {
  children: React.ReactNode;
}

export default function HydrationBoundary({
  children,
}: HydrationBoundaryProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return <>{children}</>;
}
