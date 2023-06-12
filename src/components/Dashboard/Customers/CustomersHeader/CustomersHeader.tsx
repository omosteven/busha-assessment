import DashboardHeaderActions from "components/Dashboard/common/DashboardHeaderActions/DashboardHeaderActions";

const CustomersHeader = () => {
  return (
    <>
      <DashboardHeaderActions
        title={"Customers"}
        buttonText="Add customer"
        items={["All", "Top 100"]}
      />
    </>
  );
};

export default CustomersHeader;
