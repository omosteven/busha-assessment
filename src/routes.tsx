import assets from "assets";
import Customers from "components/Dashboard/Customers/Customers";
import Payments from "components/Dashboard/Payments/Payments";
import { ReactSVG } from "react-svg";

export const routes = [
  {
    title: "Home",
    component: <Payments />,
    route: "/",
  },
  {
    title: "Payments",
    component: <Payments />,
    route: "/",
  },
  {
    title: "Balance",
    component: <Payments />,
    route: "/",
  },
  {
    title: "Customers",
    component: <Customers />,
    route: "/customers/",
  },
  {
    title: "Products",
    component: <Payments />,
    route: "/",
  },
  {
    title: "Reports",
    component: <Payments />,
    route: "/",
  },
  {
    title: "Connect",
    component: <Payments />,
    route: "/",
  },
  {
    title: (
      <>
        More <ReactSVG src={assets.icons.dropdownBlack} />
      </>
    ),
    component: <Payments />,
    route: "/",
  },
];
