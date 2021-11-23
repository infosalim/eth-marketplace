import { BaseLayout } from "@components/layout";
import { Hero, Breadcrumbs } from "@components/common";
import { CourseList } from "@components/course";
import { OrderCard } from "@components/order";
import { EthRates, Walletbar } from "@components/web3";

export default function Home() {
  return (
    <>
      <Hero />
      <Breadcrumbs />
      <Walletbar />
      <EthRates />
      <OrderCard />
      <CourseList />
    </>
  );
}

Home.Layout = BaseLayout;