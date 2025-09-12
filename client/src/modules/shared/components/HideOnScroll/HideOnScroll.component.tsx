"use client";

import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";

interface HideOnScrollProps {
  children: React.ReactElement<unknown>;
  threshold?: number;
  target?: Node | Window | undefined;
}

export default function HideOnScroll({
  children,
  threshold = 300,
  target = window,
}: HideOnScrollProps) {
  const trigger = useScrollTrigger({ threshold, target });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
