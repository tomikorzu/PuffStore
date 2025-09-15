import { HomeData } from "@/modules/shared/types/strapiTypes.type";
import { Stack, Typography } from "@mui/material";
import { newArrivals } from "./mocked/newArrivals.mock";
import ProductCard from "@/modules/shared/components/ProductCard/ProductCard.component";
import { Product } from "@/modules/shared/components/ProductCard/types/product.type";

export default function NewArrivals({ data }: { data: HomeData }) {
  return (
    <Stack component="section" alignItems="center" gap={3} sx={{ py: 3 }}>
      <Typography variant="h2">Nuevos productos</Typography>
      <Typography variant="body2">
        Descubrí los últimos vapers que agregamos a nuestra colección
      </Typography>

      <Stack
        direction="row"
        sx={{
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          gap: 2,
          pb: 1,
          px: { xs: 2, md: 4 },
          width: "100%",
          "& > *": {
            flexShrink: 0,
          },
        }}
      >
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product as Product} />
        ))}
      </Stack>
    </Stack>
  );
}
