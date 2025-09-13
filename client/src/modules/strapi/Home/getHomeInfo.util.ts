import { queryStrapi } from "@/modules/shared/utils/strapi.util";

export async function getHomeInfo() {
  try {
    const response = await queryStrapi("home?populate=*");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getHomeInfo:", error);
    throw error;
  }
}
