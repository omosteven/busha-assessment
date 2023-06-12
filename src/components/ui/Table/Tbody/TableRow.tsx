import assets from "assets";
import { ReactSVG } from "react-svg";

interface TableRowProps {
  item?: any;
  rowClass?: string;
  dataClass?: string;
  showCheckbox?: boolean;
  hasMenu?: boolean;
}

const TableRow = (props: TableRowProps) => {
  const { item, showCheckbox, hasMenu } = props;

  const arrayItems = Object.values(item);

  const firstElement = arrayItems[0];

  const lastElement = arrayItems[arrayItems.length - 1];

  return (
    <tr>
      <td>
        {showCheckbox && <input type="checkbox" />}
        <>{firstElement}</>
      </td>

      {arrayItems.slice(1, arrayItems.length - 1).map((subitem: any, key) => (
        <td key={key}>{subitem}</td>
      ))}

      <td>
        <>{lastElement}</>
        {hasMenu && <ReactSVG src={assets.icons.menu} />}
      </td>
    </tr>
  );
};

export default TableRow;
