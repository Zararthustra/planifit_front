import { useState } from "react";
import { activities as truc } from "../api/activities";
import { Checkbox } from "./Checkbox";
import { SelectCard } from "./SelectCard";
import { SVGFilter } from "../svg/SVGFilter";
import { SVGReset } from "../svg/SVGReset";

export const CoachFilter = ({ coaches, setFilteredCoaches }) => {
  //___________________________________________________ Variables

  const genders = ["Homme", "Femme"];
  const [genderSelected, setGenderSelected] = useState(null);

  const sessionTypes = ["Individuel", "Collectif", "Visio"];
  const [sessionTypeSelected, setSessionTypeSelected] = useState(null);

  const [activities, setActivities] = useState(
    truc.map((item) => {
      return {
        activity: item,
        isSelected: false,
      };
    })
  );

  //___________________________________________________ Functions

  const filterCoaches = () => {
    if (genderSelected || sessionTypeSelected)
      return setFilteredCoaches(
        coaches.filter((item) => {
          if (genderSelected && sessionTypeSelected)
            return (
              item.gender === genderSelected &&
              item.sessionTypes.includes(sessionTypeSelected)
            );
          return (
            item.gender === genderSelected ||
            item.sessionTypes.includes(sessionTypeSelected)
          );
        })
      );
    return setFilteredCoaches(coaches);
  };

  //___________________________________________________ Render

  return (
    <div
      className="coachFilter"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        margin: "5rem 0",
        backgroundColor: "var(--secondary-faded)",
        padding: "5rem 0",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          margin: "0",
        }}
      >
        Filtres
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "var(--dark-text)",
          gap: "1rem",
        }}
      >
        <h3>Genre</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {genders.map((item, index) => {
            return (
              <SelectCard
                key={index}
                cardTag={item}
                isSelected={genderSelected}
                setIsSelected={setGenderSelected}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "var(--dark-text)",
          gap: "1rem",
        }}
      >
        <h3>Type de séance</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {sessionTypes.map((item, index) => {
            return (
              <SelectCard
                key={index}
                cardTag={item}
                isSelected={sessionTypeSelected}
                setIsSelected={setSessionTypeSelected}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "var(--dark-text)",
          gap: "1rem",
        }}
      >
        <h3>Activité</h3>
        <div
          style={{
            maxWidth: "40rem",
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {activities.map((item, index) => {
            return (
              <Checkbox
                key={index}
                checkboxTag={item.activity}
                isSelected={item.isSelected}
                items={activities}
                setItems={setActivities}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          margin: "3rem 0",
        }}
      >
        <button className="primaryButton" style={{}} onClick={filterCoaches}>
          <SVGFilter />
          Filtrer
        </button>
        <button
          className="secondaryButton"
          style={{
            border: "none",
          }}
          onClick={() => {
            setGenderSelected(null);
            setSessionTypeSelected(null);
            setActivities(
              truc.map((item) => {
                return {
                  activity: item,
                  isSelected: false,
                };
              })
            );
            setFilteredCoaches(coaches);
          }}
        >
          <SVGReset />
          Réinitialiser
        </button>
      </div>
    </div>
  );
};
