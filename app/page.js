import { BarGraph } from "@/components/BarGraph";
import Card, { CardContent } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard from "@/components/SalesCard";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import React from "react";

const page = () => {
  const cardData = [
    {
      label: "Total Revenue",
      icon: DollarSign,
      amount: "$16,908.78",
      description: "+20.1% from last month",
    },
    {
      label: "Subscription",
      icon: Users,
      amount: "+2350",
      description: "+30% from last month",
    },
    {
      label: "Sales",
      icon: CreditCard,
      amount: "+1,456",
      description: "+32% from last month",
    },
    {
      label: "Active Now",
      icon: Activity,
      amount: "+524",
      description: "-246 from last hour",
    },
  ];

  const uesrSalesData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00",
    },
    {
      name: "Victoria Neuman",
      email: "vicneuman@email.com",
      saleAmount: "+$123.37",
    },
    {
      name: "Antonny Starr",
      email: "antonny78@email.com",
      saleAmount: "+$79.50",
    },
    {
      name: "Joe Kessler",
      email: "joekess@email.com",
      saleAmount: "+$99.81",
    },
    {
      name: "Ryan Gellensberg",
      email: "ryangrc.12@gmail.com",
      saleAmount: "+$199",
    },
  ];

  return (
    <div className="flex flex-col gap-5 py-2 md:pl-4">
      <PageTitle title={"Dashboard"} />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => {
          return (
            <Card
              key={index}
              label={data.label}
              icon={data.icon}
              amount={data.amount}
              description={data.description}
            />
          );
        })}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent className="cursor-pointer select-none">
          <h2 className="font-semibold text-lg">Overview</h2>
          <BarGraph />
        </CardContent>
        <CardContent className="h-[550px]">
          <section className="w-full flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Recent Sales</h2>
            <p className="text-md text-gray-400">
              You made 206 sales this month
            </p>
          </section>
          <SalesCard data={uesrSalesData} />
        </CardContent>
      </section>
    </div>
  );
};

export default page;
