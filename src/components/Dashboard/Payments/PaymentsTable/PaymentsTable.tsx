import { Table } from "components/ui";
import "./PaymentsTable.scss";
import { paymentsData } from "db";

const tableHeader = [
  <span>AMOUNT</span>,
  <span>DESCRIPTION</span>,
  <span>CUSTOMER</span>,
  <span>DATE</span>,
];

const PaymentsTable = () => {
  return (
    <div className="payments-table">
      <Table
        head={tableHeader}
        body={paymentsData}
        showCheckbox={true}
        hasMenu={true}
      />
    </div>
  );
};

export default PaymentsTable;
