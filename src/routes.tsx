import Customers from "components/Dashboard/Customers/Customers";
import Payments from "components/Dashboard/Payments/Payments";

export const routes = [
  {
    title: "Home",
    component: <Payments />,
    route: "*",
  },
  {
    title: "Payments",
    component: <Payments />,
    route: "*",
  },
  {
    title: "Balance",
    component: <Payments />,
    route: "*",
  },
  {
    title: "Customers",
    component: <Customers />,
    route: "/customers/",
  },
  {
    title: "Products",
    component: <Payments />,
    route: "*",
  },
  {
    title: "Reports",
    component: <Payments />,
    route: "*",
  },
  {
    title: "Connect",
    component: <Payments />,
    route: "*",
  },
  {
    title: "More",
    component: <Payments />,
    route: "*",
  },
];
