import { ReactSVG } from "react-svg";
import "./Search.scss";
import assets from "assets";

interface SearchProps {
  className?: string;
  placeholder?: string;
  isIconRight?: boolean;
  onChange?: Function;
  value?: string;
  id?: string;
  name?: string;
}

const Search = (props: SearchProps) => {
  const { isIconRight, placeholder, className, onChange, value, id, name } =
    props;
  return (
    <>
      <div className={`search-input ${className}`}>
        {!isIconRight && (
          <ReactSVG src={assets.icons.search} className="icon" />
        )}

        <input
          type="search"
          placeholder={placeholder ? placeholder : "Search..."}
          className={isIconRight ? "input-shift" : ""}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          id={id}
          name={name}
        />
        {isIconRight && <ReactSVG src={assets.icons.search} className="icon" />}
      </div>
    </>
  );
};

export default Search;
