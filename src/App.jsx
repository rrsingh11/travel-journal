import React from "react";
import Card from "./components/Card"
import data from "./assets/data";

export default function App(){
  const card = data.map((item) => {
    return(
      <Card
        {...item}
      />
    )
  })
  return(
     <>
      {card}
     </>
  )
}