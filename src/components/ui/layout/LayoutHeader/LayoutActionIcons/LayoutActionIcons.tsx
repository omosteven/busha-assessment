import assets from "assets";
import Button from "components/ui/Button";
import { ReactSVG } from "react-svg";

const LayoutActionIcons = () => {
  return (
    <div className="header__top-section__right">
      <Button text="Create" icon={assets.icons.dropdown} isIconRight />
      <span className="help">
        <ReactSVG src={assets.icons.help} />
        Help
      </span>
      <div className="icons-list">
        {[
          assets.icons.notification,
          assets.icons.settings2,
          assets.icons.person,
        ].map((icon, key) => (
          <ReactSVG key={key} src={icon} />
        ))}
      </div>
    </div>
  );
};

export default LayoutActionIcons;
