"use client";

import Hero from "./components/Hero/Hero.component";
import InterfaceWrapper from "../shared/components/InterfaceWrapper/InterfaceWrapper.component";
import { useLayout } from "../shared/providers/LayoutProvider.provider";
import { useEffect } from "react";
import { getStrapiData } from "../shared/utils/strapi.util";
import { useState } from "react";
import MainLoader from "../shared/components/MainLoader/MainLoader.component";
import { HomeData } from "../shared/types/strapiTypes.type";
import NewArrivals from "./components/NewArrivals/NewArrivals.component";
import TopSellings from "./components/TopSellings/TopSellings.component";
import CustomerReviews from "./components/CustomersReviews/CustomerReviews.component";

export default function Home() {
  const [data, setData] = useState<HomeData | null>(null);
  const { setLoading, loading } = useLayout();

  useEffect(() => {
    setLoading(true);
    getStrapiData("home").then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);
  return data && !loading ? (
    <InterfaceWrapper showLayout={!loading}>
      <Hero data={data} />
      <NewArrivals />
      <TopSellings />
      <CustomerReviews />
    </InterfaceWrapper>
  ) : (
    <MainLoader open={loading} />
  );
}
