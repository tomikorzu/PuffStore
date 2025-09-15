export const currencyFormat = (value: number) => {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
};
