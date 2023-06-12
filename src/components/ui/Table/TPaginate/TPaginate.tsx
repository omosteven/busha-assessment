import Button from "components/ui/Button";

const TPaginate = () => {
  return (
    <div className="custom-table__pagination">
      <span>919 results</span>
      <div>
        <Button text="Previous" />
        <Button text="Next" />
      </div>
    </div>
  );
};

export default TPaginate;
