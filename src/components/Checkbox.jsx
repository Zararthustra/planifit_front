export const Checkbox = ({ checkboxTag, isSelected, items, setItems }) => {
  //___________________________________________________ Variables

  //___________________________________________________ Functions

  const toggleCheckbox = () => {
    let tmp = [...items];
    let itemIndex = items.findIndex((item) => item.activity === checkboxTag);
    tmp[itemIndex].isSelected = !isSelected;
    setItems(tmp);
  };

  //___________________________________________________ Render

  return (
    <label
      className="box"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "1rem",
        fontWeight: isSelected ? "600" : "300",
        color: isSelected ? "black" : "var(--dark-text)",
        cursor: "pointer",
      }}
    >
      <input
        style={{
          position: "absolute",
        }}
        type="checkbox"
        onChange={toggleCheckbox}
      />
      <svg
        className={`check ${isSelected ? "check--active" : ""}`}
        aria-hidden="true"
        viewBox="-3 0 20 10"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="1.5"
          stroke={isSelected ? "#fff" : "none"}
        />
      </svg>
      <p
        style={{
          margin: "0",
        }}
      >
        {checkboxTag}
      </p>
    </label>
  );
};
