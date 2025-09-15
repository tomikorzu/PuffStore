import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
  Collapse,
  Button,
} from "@mui/material";
import { Review as ReviewType } from "./types/review.type";
import { Rating } from "@mui/material";
import { palette } from "@/theme/palette";
import { getTimeByDate } from "../../utils/getDaysByDate.util";
import CollapsibleText from "../CollapsibleText/CollapsibleText.component";

export default function Review({ review }: { review: ReviewType }) {
  return (
    <Card sx={{ borderRadius: palette.radius.lg, maxWidth: 300 }}>
      <CardContent>
        <Stack gap={0.5}>
          <Stack direction="row" gap={1} alignItems="center">
            <Avatar sizes="10px" src={review.createdBy.image} />
            <Stack gap={0.25}>
              <Typography variant="h5">{review.createdBy.name}</Typography>
              <Typography
                variant="body2"
                fontSize={{ xs: 10, md: 12 }}
                fontWeight={600}
                color={palette.text.disabled}
              >
                {getTimeByDate(String(review.date))}
              </Typography>
            </Stack>
          </Stack>
          <Rating value={review.rating} readOnly precision={0.5} size="small" />
          <CollapsibleText
            text={review.review}
            lengthToTruncate={125}
            lengthToExpand={400}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
