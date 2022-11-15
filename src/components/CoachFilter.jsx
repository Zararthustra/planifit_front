import { useState } from "react";
import { activities as truc } from "../api/activities";
import { Checkbox } from "./Checkbox";
import { SelectCard } from "./SelectCard";

export const CoachFilter = () => {
  //___________________________________________________ Variables

  const genders = ["Homme", "Femme", "Peu importe"];
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
        gap: "7rem",
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
        Filtrer les coachs par :
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "var(--dark-text)",
          gap: "1rem"
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
          gap: "1rem"
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
          gap: "1rem"
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
    </div>
  );
};
