export const queryHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

export async function queryStrapi(url: string) {
  return await fetch(`${queryHost}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });
}

export async function getStrapiData(section: string) {
  const params = "populate=*";
  try {
    const response = await queryStrapi(`${section}?${params}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting strapi data:", error);
    throw error;
  }
}
