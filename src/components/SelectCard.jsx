import { SVGMale } from "../svg/SVGMale";
import { SVGFemale } from "../svg/SVGFemale";
import { SVGIndividuel } from "../svg/SVGIndividuel";
import { SVGCollectif } from "../svg/SVGCollectif";
import { SVGVisio } from "../svg/SVGVisio";

export const SelectCard = ({ cardTag, isSelected, setIsSelected }) => {
  //___________________________________________________ Variables
  const selected = isSelected === cardTag;

  //___________________________________________________ Functions

  const pickCardIcon = (cardTag) => {
    switch (cardTag) {
      case "Homme":
        return <SVGMale selected={selected} />;

      case "Femme":
        return <SVGFemale selected={selected} />;

      case "Individuel":
        return <SVGIndividuel selected={selected} />;

      case "Collectif":
        return <SVGCollectif selected={selected} />;

      case "Visio":
        return <SVGVisio selected={selected} />;

      default:
        return;
    }
  };

  //___________________________________________________ Render

  return (
    <div
      className="selectCard"
      onClick={() => setIsSelected(cardTag)}
      style={{
        width: "10rem",
        height: "10rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: "7px",
        alignItems: "center",
        fontWeight: "600",
        color: selected ? "white" : "var(--dark-text)",
        backgroundColor: selected ? "var(--primary)" : "white",
        cursor: "pointer",
      }}
    >
      {pickCardIcon(cardTag)}
      <p
        style={{
          margin: "0",
        }}
      >
        {cardTag}
      </p>
    </div>
  );
};
