import assets from "assets";
import { Button } from "components/ui";

const DashboardHeaderActionsButtons = (props: { buttonText?: any }) => {
  const { buttonText } = props;
  return (
    <>
      <Button
        text="Filter"
        icon={assets.icons.filter}
        className="dashboard-header-actions__btns__f-e"
      />
      <Button
        icon={assets.icons.export}
        text="Export"
        className="dashboard-header-actions__btns__f-e"
      />
      <Button
        text={buttonText}
        icon={assets.icons.add}
        className="dashboard-header-actions__btns__create"
      />
    </>
  );
};

export default DashboardHeaderActionsButtons;
