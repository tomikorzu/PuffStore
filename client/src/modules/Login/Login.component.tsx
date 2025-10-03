"use client";

import {
  Box,
  Button,
  Divider,
  Fab,
  Stack,
  TextField,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";
import Snackbar from "../shared/components/Snackbar/Snackbar.component";
import { ArrowBack, Facebook, Google, X, Info } from "@mui/icons-material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { palette } from "@/theme/palette";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enterFromRight: {
    x: 300,
    opacity: 0,
  },
  enterFromLeft: {
    x: -300,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exitToLeft: {
    x: -300,
    opacity: 0,
  },
  exitToRight: {
    x: 300,
    opacity: 0,
  },
};

const transition = {
  type: "tween" as const,
  ease: "easeInOut" as const,
  duration: 0.4,
};

interface ProviderButtonProps {
  provider: string;
  icon: React.ReactNode;
  label?: string;
  onClick?: (() => void) | null;
  sx?: SxProps<Theme>;
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

const ErrorTypography = ({ message }: { message: string }) => {
  return (
    <Stack direction="row" gap={0.5} alignItems="center">
      <Info color="error" sx={{ fontSize: 16 }} />
      <Typography variant="body2" color="error">
        {message}
      </Typography>
    </Stack>
  );
};

export default function Login() {
  const router = useRouter();
  const [otpError, setOtpError] = useState("");
  const [otpCodeError, setOtpCodeError] = useState("");
  const [otpEmailValue, setOtpEmailValue] = useState("");
  const [otpCodeValue, setOtpCodeValue] = useState("");
  const [showVerificationForm, setShowVerificationForm] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOtpError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/auth/otp/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: otpEmailValue }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setOtpError(data.message);
        return;
      }

      if (data.success) {
        setShowVerificationForm(true);
      } else {
        setOtpError(data.message);
      }
    } catch (error) {
      setOtpError("Error sending OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOtpCodeError("");
    setIsLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/auth/otp/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: otpEmailValue, code: otpCodeValue }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setOtpCodeError(data.message);
        return;
      }

      if (data.success) {
        setOpenSnackbar(true);
        router.push("/");
      } else {
        setOtpCodeError(data.message);
      }
    } catch (error) {
      setOtpCodeError("Error verifying OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFabAction = () => {
    if (showVerificationForm) {
      setShowVerificationForm(false);
      setOtpEmailValue("");
      setOtpCodeValue("");
      setOtpError("");
      setOtpCodeError("");
    } else {
      router.back();
    }
  };

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
          onClick={handleFabAction}
          sx={{ position: "absolute", top: 16, left: 16 }}
        >
          <ArrowBack sx={{ mr: 1 }} />
          {showVerificationForm ? "Volver atras" : "Volver al inicio"}
        </Fab>
        <Stack
          sx={{
            gap: 2,
            maxWidth: "500px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait">
            {showVerificationForm ? (
              <motion.div
                key="verification"
                initial="enterFromRight"
                animate="center"
                exit="exitToRight"
                variants={slideVariants}
                transition={transition}
                style={{ width: "100%" }}
              >
                <Stack gap={1}>
                  <Typography variant="h1" component="h2">
                    Verificación de correo
                  </Typography>
                  <Typography>
                    Ingrese el código de verificación que le enviamos a{" "}
                    <strong>{otpEmailValue}</strong>
                  </Typography>
                  <Stack component="form" onSubmit={handleVerifyOtp} gap={2}>
                    <MuiOtpInput
                      value={otpCodeValue}
                      onChange={(value) => setOtpCodeValue(value)}
                      length={6}
                      validateChar={(char) =>
                        char.match(/\d/) as unknown as boolean
                      }
                      autoFocus
                      TextFieldsProps={{
                        placeholder: "-",
                        sx: {
                          mt: 1,
                        },
                      }}
                    />
                    {otpCodeError && <ErrorTypography message={otpCodeError} />}
                    <Button
                      type="submit"
                      disabled={otpCodeValue.length !== 6 || isLoading}
                    >
                      {isLoading ? "Verificando..." : "Verificar"}
                    </Button>
                  </Stack>
                </Stack>
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial="enterFromLeft"
                animate="center"
                exit="exitToLeft"
                variants={slideVariants}
                transition={transition}
                style={{ width: "100%" }}
              >
                <Stack gap={2}>
                  <Stack gap={0.5}>
                    <Typography variant="h1">Bienvenido a PUFFSTORE</Typography>
                    <Typography>
                      Descubrí tu estilo perfecto con recomendaciones exclusivas
                      y ofertas personalizadas
                    </Typography>
                  </Stack>
                  <Stack gap={1.5}>
                    <Typography variant="body2">Acceso rápido con:</Typography>
                    <ProviderButton provider="Google" icon={<Google />} />
                    <ProviderButton provider="Facebook" icon={<Facebook />} />
                    <ProviderButton
                      provider="Twitter"
                      icon={<X />}
                      onClick={() => signIn("twitter", { callbackUrl: "/" })}
                    />
                  </Stack>
                  <Stack gap={1}>
                    <Divider>
                      <Typography variant="body2">
                        O continuar con el código de acceso temporal
                      </Typography>
                    </Divider>
                    <Stack component="form" onSubmit={handleSubmit} gap={2}>
                      <Stack gap={0.5}>
                        <TextField
                          size="small"
                          label="Email"
                          placeholder="ejemplo@gmail.com"
                          onChange={(e) => setOtpEmailValue(e.target.value)}
                        />
                        {otpError && <ErrorTypography message={otpError} />}
                      </Stack>
                      <Button
                        disabled={otpEmailValue.length === 0 || isLoading}
                        type="submit"
                      >
                        {isLoading ? "Enviando..." : "Iniciar mi experiencia!"}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </motion.div>
            )}
          </AnimatePresence>
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
      <Snackbar
        text="Usuario registrado correctamente"
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        variant="success"
      />
    </Stack>
  );
}
