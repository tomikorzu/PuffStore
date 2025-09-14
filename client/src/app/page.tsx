"use client";

import { useState, useEffect } from "react";
import { getStrapiData } from "@/modules/shared/utils/strapi.util";

import Home from "@/modules/Home/Home.component";
import { useLayout } from "@/modules/shared/providers/LayoutProvider.provider";

export interface HomeData {
  title: string;
  description: string;
  image: {
    url: string;
  };
  Stats: {
    id: string;
    title: string;
    description: string;
  }[];
  sponsors: {
    id: string;
    url: string;
  }[];
}

export default function HomePage() {
  return <Home />;
}
