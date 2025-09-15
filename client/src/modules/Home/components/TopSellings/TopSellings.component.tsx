import { Stack } from "@mui/material";
import { newArrivals } from "../NewArrivals/mocked/newArrivals.mock";
import Section from "../Section/Section.component";
import ProductCard from "@/modules/shared/components/ProductCard/ProductCard.component";
import { Product } from "@/modules/shared/components/ProductCard/types/product.type";
import { HomeData } from "@/modules/shared/types/strapiTypes.type";

export default function TopSellings({ data }: { data: HomeData }) {
  function getTopSellings(sellings: Product[]) {
    return sellings.sort((a, b) => b.sales - a.sales);
  }
  return (
    <Section
      title="Más vendidos"
      description="Descubrí los productos más vendidos en nuestra tienda"
    >
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
          width: "100%",
          "& > *": {
            flexShrink: 0,
          },
        }}
      >
        {getTopSellings(newArrivals as Product[]).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>
    </Section>
  );
}
