"use client";

import {
  Stack,
  Typography,
  Button,
  TextField,
  Box,
  Fade,
  IconButton,
} from "@mui/material";
import { useAuth } from "../shared/providers/AuthProvider.provider";
import { palette } from "@/theme/palette";
import { useRef, useState } from "react";
import { AddAPhoto, Photo } from "@mui/icons-material";

export default function Account() {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    image: user?.image || "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsEditing(false);
    setIsLoading(true);

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user?.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setUser(user ? { ...user, ...formData } : null);
        console.log("User updated successfully");
      } else {
        console.error("Error updating user");
      }
    } catch (e) {
      console.error("Error updating user: ", e);
    } finally {
      setIsLoading(false);
    }
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function handleCancel() {
    setIsEditing(false);
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      image: user?.image || "",
    });
  }

  const isSubmitDisabled = isLoading || !formData.name || !formData.email;
  return (
    <>
      <Typography component="h1" fontWeight={600} fontSize={{ xs: 16, md: 24 }}>
        Welcome, {user?.name}
      </Typography>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        gap={3}
        sx={{
          borderRadius: palette.radius.lg,
          bgcolor: palette.surface.level2Negative,
          p: 3,
          m: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Box
              position="relative"
              borderRadius={palette.radius.pill}
              overflow="hidden"
              sx={{
                width: 100,
                height: 100,
              }}
            >
              <Fade in={isEditing} timeout={300}>
                <Stack
                  position="absolute"
                  alignItems="center"
                  justifyContent="center"
                  color="#fff"
                  onClick={() => fileInputRef.current?.click()}
                  sx={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "#00000090",
                  }}
                >
                  <TextField
                    type="file"
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        image: e.target.value,
                      }))
                    }
                    ref={fileInputRef}
                    sx={{
                      display: "none",
                    }}
                  />
                  <AddAPhoto sx={{ color: "inherit" }} />
                </Stack>
              </Fade>
              <img
                src={user?.image}
                alt={user?.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Stack gap={1}>
              <Typography fontWeight={600}>{user?.name}</Typography>
              <Typography fontWeight={600} variant="body2">
                {user?.email}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={1}>
            <Button
              onClick={isEditing ? handleCancel : handleEdit}
              size="large"
              sx={{ flex: 1 }}
            >
              {isEditing ? "Cancel" : "Edit"}
            </Button>
            {isEditing && (
              <Button
                type="submit"
                color="success"
                size="large"
                disabled={isSubmitDisabled}
                sx={{ flex: 1 }}
              >
                Save
              </Button>
            )}
          </Stack>
        </Stack>
        <Stack>
          <Stack direction="row" gap={2} flexWrap="wrap">
            <Stack gap={2}>
              <TextField
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                disabled={!isEditing}
                label="Name"
                fullWidth
              />
              <TextField
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                disabled={!isEditing}
                label="Email"
                fullWidth
              />
            </Stack>
            <Stack></Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
