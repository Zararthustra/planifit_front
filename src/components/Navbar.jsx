export const Navbar = () => {
  //___________________________________________________ Variables

  //___________________________________________________ Functions

  //___________________________________________________ Render

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "2rem",
      }}
    >
      <svg
        // onClick={() => navigate("/")}
        className="homeButton"
        width="30"
        height="30"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.8874 0.8625C13.7712 0.745339 13.633 0.652347 13.4806 0.588886C13.3283 0.525425 13.1649 0.492752 12.9999 0.492752C12.8349 0.492752 12.6715 0.525425 12.5192 0.588886C12.3669 0.652347 12.2286 0.745339 12.1124 0.8625L0.862424 12.1125C0.745263 12.2287 0.65227 12.367 0.588809 12.5193C0.525349 12.6716 0.492676 12.835 0.492676 13C0.492676 13.165 0.525349 13.3284 0.588809 13.4807C0.65227 13.633 0.745263 13.7713 0.862424 13.8875C0.979224 14.0034 1.11774 14.095 1.27004 14.1572C1.42234 14.2194 1.58542 14.251 1.74992 14.25H2.99992V23C2.99992 23.663 3.26332 24.2989 3.73216 24.7678C4.201 25.2366 4.83688 25.5 5.49992 25.5H20.4999C21.163 25.5 21.7988 25.2366 22.2677 24.7678C22.7365 24.2989 22.9999 23.663 22.9999 23V14.25H24.2499C24.5814 14.25 24.8994 14.1183 25.1338 13.8839C25.3682 13.6495 25.4999 13.3315 25.4999 13C25.5009 12.8355 25.4693 12.6724 25.4071 12.5201C25.3449 12.3678 25.2533 12.2293 25.1374 12.1125L13.8874 0.8625ZM5.49992 23V11.0125L12.9999 3.5125L20.4999 11.0125V23H5.49992Z" />
      </svg>
    </div>
  );
};