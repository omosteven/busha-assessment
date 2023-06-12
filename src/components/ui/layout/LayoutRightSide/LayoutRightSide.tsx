import assets from "assets";
import { ReactSVG } from "react-svg";

const iconsList = [
  assets.icons.plusLayout,
  assets.icons.dividerLayout,
  assets.icons.jetLayout,
  assets.icons.flashLayout,
  assets.icons.circlesLayout,
  assets.icons.menuLayout,
  assets.icons.shapesLayout,
];

const LayoutRightSide = () => {
  return (
    <div className="layout-right-side">
      <div>
        {iconsList.map((icon: string, key) => (
          <ReactSVG key={key} src={icon} />
        ))}
      </div>
    </div>
  );
};

export default LayoutRightSide;
