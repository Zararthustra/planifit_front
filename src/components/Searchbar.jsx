import { SVGSearch } from "../svg/SVGSearch";

export const Searchbar = () => {
  //___________________________________________________ Variables

  //___________________________________________________ Functions

  //___________________________________________________ Render

  return (
    <div
      className="searchbar"
      style={{
        position: "relative",
      }}
    >
      <SVGSearch />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Un coach, une ville, une activité ..."
        style={{
          height: "2.5rem",
          width: "30rem",
          borderRadius: "50px",
          margin: "1rem 0",
          outline: "none",
          border: "none",
          paddingLeft: "3.5rem",
          fontSize: "1.1rem",
        }}
      ></input>
    </div>
  );
};
