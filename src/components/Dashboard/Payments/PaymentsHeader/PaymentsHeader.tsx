import DashboardHeaderActions from "components/Dashboard/common/DashboardHeaderActions/DashboardHeaderActions";

const PaymentsHeader = () => {
  return (
    <div>
      <DashboardHeaderActions
        title="Payments"
        items={["All", "Succeeded", "Refunded", "Uncaptured"]}
        buttonText={"Create payment"}
      />
    </div>
  );
};

export default PaymentsHeader;
