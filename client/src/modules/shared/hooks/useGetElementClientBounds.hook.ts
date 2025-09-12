"use client";

import { useMediaQueryDevices } from "@/modules/shared/hooks/useMediaQueryDevices.hook";
import { useEffect, useState } from "react";

export const useGetElementClientBounds = (
  classSelector: string,
  hasChangeState?: boolean
) => {
  const [rect, setRect] = useState<DOMRect | null>(null);

  const { isMediumAndPhone } = useMediaQueryDevices();

  const updateRect = () => {
    setTimeout(() => {
      const element = document.querySelector(classSelector);
      if (element) setRect(element.getBoundingClientRect());
    }, 10);
  };

  useEffect(() => {
    updateRect();
    window.addEventListener("resize", updateRect);

    const observer = new MutationObserver(updateRect);
    const target =
      document.querySelector(classSelector)?.parentNode || document.body;
    observer.observe(target, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updateRect);
      observer.disconnect();
    };
  }, [classSelector, isMediumAndPhone, hasChangeState]);

  return rect;
};
