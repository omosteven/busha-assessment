import { Link } from "react-router-dom";
import { routes } from "routes";

interface LayoutLinksProps {
  setActiveKey: Function;
  activeItemKey: number;
}
const LayoutLinks = (props: LayoutLinksProps) => {
  const { setActiveKey, activeItemKey } = props;

  return (
    <div>
      {routes?.map(({ route, title }, key) => (
        <Link
          key={key}
          to={route}
          onClick={() => setActiveKey(key)}
          className={`${activeItemKey === key ? "active-link" : ""}`}
        >
          <span>{title}</span>
        </Link>
      ))}
    </div>
  );
};

export default LayoutLinks;
