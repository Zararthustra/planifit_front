export const CoachCard = ({ coach }) => {
  //___________________________________________________ Variables

  //___________________________________________________ Functions

  //___________________________________________________ Render
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "17rem",
        position: "relative",
        paddingTop: "8rem",
      }}
    >
      <img
        style={{
          position: "absolute",
          borderRadius: "50%",
          border: "3px solid var(--primary)",
          // outline: "7px solid var(--secondary-faded)",
          top: "0",
          width: "13rem",
          height: "13rem",
          objectFit: "cover",
        }}
        src={require(`../assets/${coach.image}`)}
        alt={"Photo de " + coach.name}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "5rem 0 2rem",
          gap: "3rem",
        }}
      >
        <div>
          <h3
            style={{
              fontWeight: "400",
              fontFamily: "var(--title)",
              color: "var(--primary)",
              fontSize: "2rem",
              margin: "2rem 0 .5rem",
              textAlign: "center",
            }}
          >
            {coach.name}
          </h3>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0",
              textAlign: "center",
              color: "var(--dark-text)",
              gap: ".5rem",
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#494949"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z"
                stroke="#494949"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {coach.location}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            height: "5rem",
          }}
        >
          {coach.activities.map((item, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "var(--secondary)",
                padding: ".3rem 1.3rem",
                borderRadius: "15px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <button className="primaryButton">Voir le profil</button>
      </div>
    </div>
  );
};
