import { useState } from "react";
import Switch from "components/ui/Switch";

import LayoutBrandLogo from "./LayoutBrandLogo/LayoutBrandLogo";
import LayoutSearch from "./LayoutSearch/LayoutSearch";
import LayoutActionIcons from "./LayoutActionIcons/LayoutActionIcons";
import LayoutLinks from "./LayoutLinks/LayoutLinks";
import "./LayoutHeader.scss";

const LayoutHeader = () => {
  const [activeItemKey, setActiveKey] = useState(0);
  return (
    <header className="header">
      <div className="header__top-section">
        <LayoutBrandLogo />
        <LayoutSearch />
        <LayoutActionIcons />
      </div>
      <div className="header__bottom-section">
        <LayoutLinks {...{ setActiveKey, activeItemKey }} />

        <div className="right-side">
          <span>Developers</span>
          <span>
            Test data
            <Switch hideLabel />
          </span>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
