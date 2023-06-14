import { ReactSVG } from "react-svg";
import "./Button.scss";

interface ButtonProps {
  text: string;
  isLoadingText?: string;
  className?: string;
  onClick?: Function;
  id?: string;
  isLoading?: boolean;
  icon?: string;
  isIconRight?: boolean;
  loader?: string;
}

const Button = (props: ButtonProps) => {
  const {
    text,
    className,
    onClick,
    id,
    isLoading,
    isLoadingText,
    icon,
    isIconRight,
    loader,
  } = props;
  return (
    <div className="custom-button">
      <button
        id={id}
        className={`button ${className}
         ${isLoading ? "button-disabled" : ""}`}
        onClick={() => onClick?.()}
        disabled={isLoading}
      >
        {icon && !isIconRight && (
          <ReactSVG src={icon} className="button-icon" />
        )}

        {isLoading ? <> {isLoadingText ? isLoadingText : text}</> : <>{text}</>}

        {icon && isIconRight && <ReactSVG src={icon} className="button-icon" />}

        {isLoading && loader && (
          <ReactSVG src={loader} className="button-icon" />
        )}
      </button>
    </div>
  );
};

export default Button;
