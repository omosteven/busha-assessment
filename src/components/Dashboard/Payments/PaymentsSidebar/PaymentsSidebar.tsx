import { useState } from "react";
import "./PaymentsSidebar.scss";

const sidebarList = [
  {
    title: "All payments",
    list: ["Reviews", "Disputes", "Collected fees", "All transactions"],
    isCollapsed: true,
  },
  {
    title: "Invoices",
    list: [],
    isCollapsed: false,
  },
  {
    title: "Subscriptions",
    list: [],
    isCollapsed: false,
  },
  {
    title: "Qoutes",
    list: [],
    isCollapsed: false,
  },
];

const PaymentsSidebar = () => {
  const [activeItemKey, setActiveItemKey] = useState(0);

  const toggleItem = (key: number) => {
    setActiveItemKey(key);
  };

  return (
    <div className="payments-sidebar">
      <h3>Payments</h3>

      <div className="payments-sidebar__list">
        {sidebarList?.map(({ title, list }, key) => (
          <div key={key}>
            <h4
              onClick={() => toggleItem(key)}
              className={`${key === activeItemKey ? "active" : ""}`}
            >
              {title}
            </h4>
            {activeItemKey === key && (
              <>
                {list?.map((text, id) => (
                  <p key={id}>{text}</p>
                ))}
              </>
            )}
          </div>
        ))}

        <h5>Payment Links</h5>
      </div>
    </div>
  );
};

export default PaymentsSidebar;
