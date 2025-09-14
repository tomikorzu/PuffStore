"use client";

import { Stack, Typography } from "@mui/material";
import { useLayout } from "@/modules/shared/providers/LayoutProvider.provider";
import { useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const { setLoading } = useLayout();
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Stack>
      <Typography>Login</Typography>
      <Link href="/">Home</Link>
    </Stack>
  );
}
