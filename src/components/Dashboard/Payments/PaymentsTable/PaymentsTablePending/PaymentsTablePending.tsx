import assets from "assets";
import { ReactSVG } from "react-svg";

const PaymentsTablePending = () => {
  return (
    <span className="payments-table__amount pending">
      Yellow
      <ReactSVG src={assets.icons.pending} />
    </span>
  );
};

export default PaymentsTablePending;
