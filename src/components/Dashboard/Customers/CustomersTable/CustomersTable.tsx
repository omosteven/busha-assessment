import { Table } from "components/ui";
import "./CustomersTable.scss";
import assets from "assets";

import { ReactSVG } from "react-svg";
import { customersData } from "db";

const tableHeader = [
  <span className="d-flex">
    EMAIL <ReactSVG src={assets.icons.settings} />
  </span>,
  <span className="d-flex">
    DESCRIPTION <ReactSVG src={assets.icons.settings} />
  </span>,
  <span className="d-flex">DEFAULT SOURCE</span>,
  <span className="d-flex">CREATED</span>,
];

const CustomersTable = () => {
  return (
    <div className="customers-table">
      <Table head={tableHeader} body={customersData} showCheckbox={true} />
    </div>
  );
};

export default CustomersTable;
