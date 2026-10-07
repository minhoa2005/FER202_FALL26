import React from "react";
import { data } from "./data";
import AnimalCard from "./AnimalCard";

export default function EX19() {
  return (
    <div>
      {data.map((animal) => (
        <AnimalCard animal={animal} />
      ))}
    </div>
  );
}
