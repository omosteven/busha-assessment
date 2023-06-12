import "./Layout.scss";
import { ReactNode } from "react";
import LayoutHeader from "./LayoutHeader/LayoutHeader";
import LayoutRightSide from "./LayoutRightSide/LayoutRightSide";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <div className="layout">
      
      <div className="layout-left-side">
        <LayoutHeader />
        <main>{children}</main>
      </div>

      <LayoutRightSide />
    </div>
  );
};

export default Layout;
