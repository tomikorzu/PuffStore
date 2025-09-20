"use client";

import {
  Box,
  Button,
  Divider,
  Fab,
  Stack,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { X, ArrowBack, Facebook, Google, Info } from "@mui/icons-material";
import { palette } from "@/theme/palette";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface ProviderButtonProps {
  provider: string;
  icon: React.ReactNode;
  label?: string;
  onClick?: (() => void) | null;
  sx?: SxProps;
}

function ProviderButton({
  provider,
  icon,
  label,
  onClick = null,
  sx,
}: ProviderButtonProps) {
  return (
    <Button
      startIcon={icon}
      size="large"
      onClick={onClick ? onClick : () => signIn(provider.toLowerCase())}
      sx={{ textTransform: "capitalize", ...sx }}
    >
      {label || provider}
    </Button>
  );
}

export default function Login() {
  const router = useRouter();
  const [otpError, setOtpError] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      width="100%"
      minHeight="100dvh"
    >
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
            <Typography variant="h1">Bienvenido a PUFFSTORE</Typography>
            <Typography>
              Descubrí tu estilo perfecto con recomendaciones exclusivas y
              ofertas personalizadas
            </Typography>
          </Stack>
          <Stack gap={1.5}>
            <Typography variant="body2">Acceso rápido con:</Typography>
            <ProviderButton provider="Google" icon={<Google />} />
            <ProviderButton provider="Facebook" icon={<Facebook />} />
            <ProviderButton provider="Twitter" icon={<X />} onClick={() => signIn("twitter", { callbackUrl: "/" })} />
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
          <Button disabled={otpValue.length === 0}>
            Iniciar mi experiencia!
          </Button>
        </Stack>
      </Stack>
      <Box
        width="100%"
        height="100dvh"
        sx={{
          bgcolor: palette.surface.level2Negative,
        }}
      >
        <img
          src="/images/login/background.png"
          alt="Login Image"
          style={{ width: "100%", height: "100dvh", objectFit: "cover" }}
        />
      </Box>
    </Stack>
  );
}
