import assets from "assets";
import { ReactSVG } from "react-svg";

const LayoutBrandLogo = () => {
  return (
    <div>
      <div className="brand-name">
        <ReactSVG src={assets.icons.logo} className="brand-logo" />
        Cactus Practice
        <ReactSVG src={assets.icons.dropdownBlack} />
      </div>
    </div>
  );
};

export default LayoutBrandLogo;
