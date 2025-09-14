"use client";

import { createContext, useContext, useState } from "react";
import MainLoader from "@/modules/shared/components/MainLoader/MainLoader.component";

export interface LayoutContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const LayoutContext = createContext<LayoutContextType | null>(null);

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutContext.Provider
      value={{ loading, setLoading }}
    >
      {loading && <MainLoader open={loading} />}
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
