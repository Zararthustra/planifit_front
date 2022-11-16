import { SVGLocation } from "../svg/SVGLocation";

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
        paddingTop: "7rem",
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
            <SVGLocation />
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
                fontWeight: "600"
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
