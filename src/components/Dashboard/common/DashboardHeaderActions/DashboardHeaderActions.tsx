import DashboardHeaderActionsButtons from "./DashboardHeaderActionsButtons/DashboardHeaderActionsButtons";
import DashboardHeaderActionsFilterList from "./DashboardHeaderActionsFilterList/DashboardHeaderActionsFilterList";
import "./DashboardHeaderActions.scss";

interface DashboardHeaderActionsProps {
  title: any;
  items: Array<any>;
  buttonText?: any;
}

const DashboardHeaderActions = (props: DashboardHeaderActionsProps) => {
  const { title, items, buttonText } = props;
  return (
    <div>
      <div className="dashboard-header-actions">
        <div>
          <h3>{title}</h3>
        </div>
        <div className="dashboard-header-actions__btns">
          <DashboardHeaderActionsButtons buttonText={buttonText} />
        </div>
      </div>
      <DashboardHeaderActionsFilterList {...{ items }} />
    </div>
  );
};

export default DashboardHeaderActions;
