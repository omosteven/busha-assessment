import { Table } from "components/ui";
import "./PaymentsTable.scss";
import { paymentsData } from "db";

const tableHeader = [
  <span className="d-flex">AMOUNT</span>,
  <span className="d-flex">DESCRIPTION</span>,
  <span className="d-flex">CUSTOMER</span>,
  <span className="d-flex">DATE</span>,
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
