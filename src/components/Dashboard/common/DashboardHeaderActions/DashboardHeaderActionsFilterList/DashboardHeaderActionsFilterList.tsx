import { useState } from "react";
import "./DashboardHeaderActionsFilterList.scss";

const DashboardHeaderActionsFilterList = (props: {
  items: Array<[]>;
}) => {
  const { items } = props;
  const [activeItemKey, setActiveItemKey] = useState(0);
  const toggleItem = (key: number) => {
    setActiveItemKey(key);
  };

  return (
    <div className="dashboard-header-actions-FL">
      {items?.map((item, key) => (
        <li
          onClick={() => toggleItem(key)}
          key={key}
          className={`${key === activeItemKey ? "active" : ""}`}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default DashboardHeaderActionsFilterList;
