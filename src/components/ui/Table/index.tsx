import { ReactNode } from "react";
import "./Table.scss";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";
import TPaginate from "./TPaginate/TPaginate";

interface TableProps {
  tableClass?: string;
  head: Array<ReactNode>;
  body: Array<object>;
  showCheckbox?: boolean;
  hasMenu?: boolean;
  hidePagination?: boolean;
}

const Table = (props: TableProps) => {
  const { tableClass, head, body, showCheckbox, hasMenu, hidePagination } =
    props;

  return (
    <div className="custom-table">
      <table className={`${tableClass}`}>
        <Thead head={head} showCheckbox={showCheckbox} />
        <Tbody body={body} showCheckbox={showCheckbox} hasMenu={hasMenu} />
      </table>

      {!hidePagination && <TPaginate />}
    </div>
  );
};

export default Table;
