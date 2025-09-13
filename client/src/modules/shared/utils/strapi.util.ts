export const queryHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async function queryStrapi(url: string) {
  return await fetch(`${queryHost}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });
}
