import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { palette } from "@/theme/palette";
import React, { useEffect } from "react";
import { Close } from "@mui/icons-material";

interface MobileDrawerWrapperProps {
  children: React.ReactNode;
  open: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;

  leftIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
  rightIcon?: React.ReactNode;
  onRightIconClick?: () => void;

  buttons?: React.ReactNode;

  showCloseIcon?: boolean;
  closeIconPosition?: "left" | "right";

  backgroundColor?: string;

  sx?: SxProps;
  sxContainer?: SxProps;
  sxHeader?: SxProps;
  sxIcons?: SxProps;
  sxTitle?: SxProps;
  sxButtonsContainer?: SxProps;
  sxDivider?: SxProps;
  sxChildrenContainer?: SxProps;
}

const MobileDrawerWrapper: React.FC<MobileDrawerWrapperProps> = ({
  children,
  open,
  onClose,
  title,
  leftIcon,
  onLeftIconClick,
  rightIcon,
  onRightIconClick,
  buttons,
  showCloseIcon,
  closeIconPosition = "right",
  backgroundColor,
  sx,
  sxContainer,
  sxHeader,
  sxIcons,
  sxTitle,
  sxButtonsContainer,
  sxDivider,
  sxChildrenContainer,
}) => {
  const bgColor = backgroundColor || palette.surface.level2;
  const iconButtonSx = { p: 0, width: 22, height: 22, ...sxIcons };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [open]);

  const CloseButton: React.FC = () => (
    <IconButton onClick={onClose} sx={iconButtonSx}>
      <Close />
    </IconButton>
  );
  return (
    <Drawer
      open={open}
      onClose={(e) => onClose(e as React.MouseEvent<HTMLButtonElement>)}
      anchor="bottom"
      sx={sx}
      PaperProps={{
        sx: {
          borderRadius: "16px 16px 0 0",
          backgroundColor: bgColor,
          p: 0,
          overflow: "visible",
          touchAction: "none",
          ...sxContainer,
        },
      }}
    >
      {title && (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
              ...sxHeader,
            }}
          >
            <Box
              sx={{ width: 40, display: "flex", justifyContent: "flex-start" }}
              className="left-icon"
            >
              {showCloseIcon && closeIconPosition === "left" ? (
                <CloseButton />
              ) : (
                leftIcon &&
                (onLeftIconClick ? (
                  <IconButton onClick={onLeftIconClick} sx={iconButtonSx}>
                    {leftIcon}
                  </IconButton>
                ) : (
                  <Box sx={iconButtonSx}>{leftIcon}</Box>
                ))
              )}
            </Box>
            <Box
              sx={{ flex: 1, display: "flex", justifyContent: "center" }}
              className="title-container"
            >
              <Typography
                sx={{ textAlign: "center", fontSize: 14, ...sxTitle }}
              >
                {title}
              </Typography>
            </Box>
            <Box
              sx={{ width: 40, display: "flex", justifyContent: "flex-end" }}
              className="right-icon"
            >
              {showCloseIcon && closeIconPosition === "right" ? (
                <CloseButton />
              ) : rightIcon && onRightIconClick ? (
                <IconButton onClick={onRightIconClick} sx={iconButtonSx}>
                  {rightIcon}
                </IconButton>
              ) : (
                <Box sx={iconButtonSx}>{rightIcon}</Box>
              )}
            </Box>
          </Box>
          <Divider sx={{ my: 0, ...sxDivider }} />
        </>
      )}
      <Box
        sx={{
          px: 2,
          overflowY: "auto",
          maxHeight: "70vh",
          touchAction: "pan-y",
          ...sxChildrenContainer,
        }}
      >
        {children}
      </Box>
      {buttons && (
        <Box
          sx={{
            width: "100%",
            pb: 2,
            ...sxButtonsContainer,
          }}
        >
          <Divider sx={{ display: { xs: "block", md: "none" }, mb: 2 }} />
          <Stack
            direction="row"
            sx={{ justifyContent: "center", gap: 1, width: "100%", px: 2 }}
          >
            {buttons}
          </Stack>
        </Box>
      )}
    </Drawer>
  );
};

export default MobileDrawerWrapper;
