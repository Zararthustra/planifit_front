import { useState } from "react";
import { coaches as truc } from "../api/coaches";
import { CoachCard } from "../components/CoachCard";
import { CoachFilter } from "../components/CoachFilter";
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import "../styles/Home.css";
import { SVGPlaniFitTitle } from "../svg/SVGPlaniFitTitle";

export const Home = () => {
  //___________________________________________________ Variables

  const coaches = truc;
  const [filteredCoaches, setFilteredCoaches] = useState(coaches);
  const [isSearching, setIsSearching] = useState(false);

  //___________________________________________________ Functions

  //___________________________________________________ Render

  return (
    <main
      className="homePage"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <SVGPlaniFitTitle />
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "4rem",
          fontSize: "1.2rem",
        }}
      >
        <span>
          <i>
            Prenez<strong> rendez-vous</strong> avec un
            <strong> coach sportif</strong>
          </i>
        </span>{" "}
        <span>
          <i>en un battement de jambe !</i>
        </span>
      </p>
      <Searchbar
        coaches={coaches}
        setFilteredCoaches={setFilteredCoaches}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />
      {!isSearching && (
        <CoachFilter
          coaches={coaches}
          setFilteredCoaches={setFilteredCoaches}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {filteredCoaches.map((item, index) => {
          return <CoachCard coach={item} key={index} />;
        })}
      </div>
    </main>
  );
};
