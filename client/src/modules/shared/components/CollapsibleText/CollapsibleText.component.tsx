"use client";

import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { maxInputLength } from "../../constants/input";

interface CollapsibleTextProps {
  text: string;
  lengthToTruncate?: number;
  lengthToExpand?: number;
}

export default function CollapsibleText({
  text,
  lengthToTruncate = 125,
  lengthToExpand = maxInputLength,
}: CollapsibleTextProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = text.length > lengthToTruncate;
  const truncatedText = shouldTruncate
    ? text.substring(0, lengthToTruncate)
    : text;
  return (
    <Typography variant="body2">
      {expanded ? text.substring(0, lengthToExpand) : truncatedText}
      {shouldTruncate && !expanded && (
        <>
          ...{" "}
          <Button
            variant="text"
            size="small"
            onClick={() => setExpanded(true)}
            sx={{
              p: 0,
              minWidth: "auto",
              fontSize: "inherit",
              fontWeight: "inherit",
              textTransform: "none",
            }}
          >
            Mostrar más
          </Button>
        </>
      )}

      {expanded && shouldTruncate && (
        <Button
          variant="text"
          size="small"
          onClick={() => setExpanded(false)}
          sx={{
            p: 0,
            minWidth: "auto",
            fontSize: "inherit",
            fontWeight: "inherit",
            textTransform: "none",
            alignSelf: "flex-start",
          }}
        >
          Mostrar menos
        </Button>
      )}
    </Typography>
  );
}
