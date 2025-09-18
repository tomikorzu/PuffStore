"use client";

import Hero from "./components/Hero/Hero.component";
import InterfaceWrapper from "../shared/components/InterfaceWrapper/InterfaceWrapper.component";
import NewArrivals from "./components/NewArrivals/NewArrivals.component";
import TopSellings from "./components/TopSellings/TopSellings.component";
import CustomerReviews from "./components/CustomersReviews/CustomerReviews.component";
import BrowseByCategory from "./components/BrowseByCategory/BrowseByCategory.component";

export default function Home() {
  return (
    <InterfaceWrapper>
      <Hero />
      <NewArrivals />
      <TopSellings />
      <BrowseByCategory />
      <CustomerReviews />
    </InterfaceWrapper>
  );
}
