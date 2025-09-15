import { Stack } from "@mui/material";
import { data } from "../../../shared/mocked/data.mock";
import ProductCard from "@/modules/shared/components/ProductCard/ProductCard.component";
import { Product } from "@/modules/shared/components/ProductCard/types/product.type";
import Section from "../../components/Section/Section.component";

export default function NewArrivals() {
  function getNewArrivals(products: Product[]) {
    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

    return products
      .filter((product) => {
        const entryDate = new Date(product.entryDate);
        return entryDate >= thirtyDaysAgo && entryDate <= today;
      })
      .sort(
        (a, b) =>
          new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime()
      )
      .slice(0, 10);
  }

  const newArrivals = getNewArrivals(data as Product[]);

  return (
    newArrivals.length > 0 && (
      <Section
        title="Nuevos productos"
        description="Descubrí los últimos vapers que agregamos a nuestra colección en los últimos 30 días"
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
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product as Product} />
          ))}
        </Stack>
      </Section>
    )
  );
}
