import { Stack } from "@mui/material";
import { data } from "../../../shared/mocked/data.mock";
import Section from "../Section/Section.component";
import ProductCard from "@/modules/shared/components/ProductCard/ProductCard.component";
import { Product } from "@/modules/shared/components/ProductCard/types/product.type";

export default function TopSellings() {
  function getTopSellings(sellings: Product[]) {
    return sellings
      .filter((sell) => sell.sales > 0 && sell)
      .slice(0, 10)
      .sort((a, b) => b.sales - a.sales);
  }
  return (
    getTopSellings(data as Product[]).length > 0 && (
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
          {getTopSellings(data as Product[]).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
      </Section>
    )
  );
}
