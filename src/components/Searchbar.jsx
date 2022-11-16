import { SVGCross } from "../svg/SVGCross";
import { SVGSearch } from "../svg/SVGSearch";

export const Searchbar = ({
  coaches,
  setFilteredCoaches,
  isSearching,
  setIsSearching,
}) => {
  //___________________________________________________ Variables

  //___________________________________________________ Functions

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value.length > 0) setIsSearching(true);
    else setIsSearching(false);

    setFilteredCoaches(
      coaches.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.location.toLowerCase().includes(value.toLowerCase()) ||
          item.activities.includes(value)
      )
    );
  };

  // Avoid multiple API calls on typing (waits {x}ms before set input)
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      }, wait);
      if (callNow) func.apply(context, args);
    };
  }

  //___________________________________________________ Render

  return (
    <div
      className="searchbar"
      style={{
        position: "relative",
        marginBottom: "4rem",
      }}
    >
      <SVGSearch />
      <input
        onChange={debounce(handleSearch, 500)}
        className="searchInput"
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
      />
      {isSearching && (
        <div
          onClick={() => {
            document.querySelector(".searchInput").value = "";
            setIsSearching(false);
          }}
        >
          <SVGCross />
        </div>
      )}
    </div>
  );
};
