"use client";

import {
  Button,
  Divider,
  Fab,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useLayout } from "@/modules/shared/providers/LayoutProvider.provider";
import { useEffect, useState } from "react";
import { Apple, ArrowBack, Facebook, Google, Info } from "@mui/icons-material";
import { palette } from "@/theme/palette";
import { useRouter } from "next/navigation";
import { getStrapiData } from "../shared/utils/strapi.util";
import MainLoader from "../shared/components/MainLoader/MainLoader.component";
import { LoginData } from "../shared/types/strapiTypes.type";

interface ProviderButtonProps {
  provider: string;
  icon: React.ReactNode;
  label?: string;
  sx?: SxProps;
}

function ProviderButton({ provider, icon, label, sx }: ProviderButtonProps) {
  return (
    <Button
      startIcon={icon}
      size="large"
      sx={{ textTransform: "capitalize", ...sx }}
    >
      {label || provider}
    </Button>
  );
}

export default function Login() {
  const { setLoading, loading } = useLayout();
  const router = useRouter();
  const [otpError, setOtpError] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [data, setData] = useState<LoginData | null>(null);

  useEffect(() => {
    setLoading(true);
    getStrapiData("login").then((data) => setData(data.data));
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [data]);

  return data && !loading ? (
    <Stack justifyContent="center" minHeight="100dvh">
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: "600px",
          width: "100%",
          height: "100dvh",
          px: 4,
          bgcolor: palette.surface.level2Negative,
        }}
      >
        <Fab
          variant="extended"
          size="large"
          onClick={() => router.back()}
          sx={{ position: "absolute", top: 16, left: 16 }}
        >
          <ArrowBack sx={{ mr: 1 }} />
          Volver al inicio
        </Fab>
        <Stack
          sx={{
            gap: 2,
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <Stack gap={0.5}>
            <Typography variant="h1">{data.title}</Typography>
            <Typography>{data.description}</Typography>
          </Stack>
          <Stack gap={1.5}>
            <Typography variant="body2">Acceso rápido con:</Typography>
            <ProviderButton provider="Google" icon={<Google />} />
            <ProviderButton provider="Facebook" icon={<Facebook />} />
            <ProviderButton provider="Apple" icon={<Apple />} />
          </Stack>
          <Stack gap={1}>
            <Divider>
              <Typography variant="body2">
                O continuar con el código de acceso temporal
              </Typography>
            </Divider>
            <TextField
              size="small"
              label="Email"
              placeholder="ejemplo@gmail.com"
              onChange={(e) => setOtpValue(e.target.value)}
            />
            {otpError && (
              <Stack direction="row" gap={0.5} alignItems="center">
                <Info color="error" sx={{ fontSize: 16 }} />
                <Typography variant="body2" color="error">
                  Error al enviar el código
                </Typography>
              </Stack>
            )}
          </Stack>
          <Button disabled={otpValue.length === 0}>{data.cta_text}</Button>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <MainLoader open={loading} />
  );
}
