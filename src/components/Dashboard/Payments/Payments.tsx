import PaymentsHeader from "./PaymentsHeader/PaymentsHeader";
import PaymentsSidebar from "./PaymentsSidebar/PaymentsSidebar";
import PaymentsTable from "./PaymentsTable/PaymentsTable";
import "./Payments.scss";

const Payments = () => {
  return (
    <div className="payments">
      <PaymentsSidebar />
      <div className="payments__right-content">
        <PaymentsHeader />
        <PaymentsTable />
      </div>
    </div>
  );
};

export default Payments;
