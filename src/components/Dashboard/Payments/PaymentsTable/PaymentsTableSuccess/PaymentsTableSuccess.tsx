import assets from "assets";
import { ReactSVG } from "react-svg";

const PaymentsTableSuccess = () => {
  return (
    <>
      <span className="payments-table__amount success">
        Succeeded
        <ReactSVG src={assets.icons.success} />
      </span>
    </>
  );
};

export default PaymentsTableSuccess;
