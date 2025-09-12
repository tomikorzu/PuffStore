export async function queryStrapi(url: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });
}
