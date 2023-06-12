import { ReactNode } from "react";

interface TheadProps {
  head: Array<ReactNode>;
  showCheckbox?: boolean;
}

const Thead = (props: TheadProps) => {
  const { head, showCheckbox } = props;
  const firstElement = head[0];
  
  return (
    <>
      <thead>
        <tr>
          <th>
            {showCheckbox && <input type="checkbox" />}
            {firstElement}
          </th>
          {head.slice(1).map((item: any, key) => (
            <th key={key}>{item}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Thead;
