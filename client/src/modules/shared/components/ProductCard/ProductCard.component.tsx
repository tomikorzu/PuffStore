import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grow,
  Rating,
  Stack,
  Typography,
  Chip,
  Box,
  Tooltip,
} from "@mui/material";
import { Product } from "./types/product.type";
import { currencyFormat } from "../../utils/textFormat.util";
import { palette } from "@/theme/palette";
import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.percentageDiscount > 0;
  const priceWithDiscount =
    product.price - (product.price * product.percentageDiscount) / 100;
  const productLink = `/product/${product.id}`;
  const router = useRouter();
  return (
    <Grow in={true} timeout={1000}>
      <Card
        sx={{
          maxWidth: 250,
          borderRadius: palette.radius.lg,
          transition: "transform 0.3s ease-in-out",
          textDecoration: "none",
          "&:hover": {
            transform: "scale(2.5)",
          },
        }}
      >
        <CardContent
          onClick={() => router.push(productLink)}
          sx={{ p: 0, cursor: "pointer" }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: 250,
              height: 250,
              objectFit: "cover",
              borderBottom: `.5px solid ${palette.colors.black[100]}`,
            }}
          />
          <Stack pt={1} px={1.5}>
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <Stack direction="row" alignItems="center" gap={1}>
              <Tooltip title={product.name}>
                <Typography fontWeight={600} noWrap>
                  {product.name}
                </Typography>
              </Tooltip>
              {hasDiscount && (
                <Chip
                  size="small"
                  label={`-${product.percentageDiscount}%`}
                  color="error"
                />
              )}
            </Stack>
            <Stack direction="row" gap={1} alignItems="center">
              <Typography variant="body2" fontWeight={600}>
                {currencyFormat(
                  hasDiscount ? priceWithDiscount : product.price
                )}
              </Typography>
              {hasDiscount && (
                <Typography
                  variant="body2"
                  fontWeight={600}
                  color={palette.colors.black[500]}
                  sx={{ textDecoration: "line-through" }}
                >
                  {currencyFormat(product.price)}
                </Typography>
              )}
            </Stack>
          </Stack>
        </CardContent>
        <CardActions sx={{ px: 1.5, pb: 2 }}>
          <Button fullWidth startIcon={<ShoppingCart fontSize="small" />}>
            Agregar
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
}
