import { queryStrapi } from "@/modules/shared/utils/strapi.util";

export async function getHomeInfo() {
  return (await queryStrapi("home")).json();
}
