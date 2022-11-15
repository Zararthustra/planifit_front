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
          fontSize: "1.1rem"
        }}
      ></input>
      <svg
        style={{
          position: "absolute",
          top: ".6rem",
          left: ".8rem",
          width: "2rem",
        }}
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.5 52.5L41.285 41.265M47.5 26.25C47.5 31.8859 45.2612 37.2909 41.276 41.276C37.2909 45.2612 31.8859 47.5 26.25 47.5C20.6141 47.5 15.2091 45.2612 11.224 41.276C7.23883 37.2909 5 31.8859 5 26.25C5 20.6141 7.23883 15.2091 11.224 11.224C15.2091 7.23883 20.6141 5 26.25 5C31.8859 5 37.2909 7.23883 41.276 11.224C45.2612 15.2091 47.5 20.6141 47.5 26.25V26.25Z"
          stroke="var(--light-text)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
