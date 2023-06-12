import { useState } from "react";
import "./Switch.scss";

interface SwitchProps {
  className?: string;
  onChange?: Function;
  value?: boolean;
  id?: string;
  hideLabel?: boolean;
}

const Switch = (props: SwitchProps) => {
  const { className, onChange, value, id, hideLabel } = props;

  const [isOff, setIsOff] = useState(!value);

  const handleChange = () => {
    setIsOff(!isOff);
    onChange?.(isOff);
  };

  return (
    <>
      <div
        className={`switch-button ${className} ${
          !isOff ? "" : "switch-button__off"
        }`}
        onClick={handleChange}
        id={id}
      >
        {!hideLabel && (
          <div className={isOff ? "text off" : "text"}>
            {isOff ? "OFF" : "ON"}
          </div>
        )}

        <div className={isOff ? "circle right" : "circle left"}></div>
      </div>
    </>
  );
};

export default Switch;
