import TableRow from "./TableRow";

interface TbodyProps {
  body: Array<object>;
  showCheckbox?: boolean;
  hasMenu?: boolean;
}

const Tbody = (props: TbodyProps) => {
  const { body, showCheckbox, hasMenu } = props;

  return (
    <tbody>
      {body.map((item: any, key) => (
        <TableRow
          item={item}
          key={key}
          showCheckbox={showCheckbox}
          hasMenu={hasMenu}
        />
      ))}
    </tbody>
  );
};

export default Tbody;
