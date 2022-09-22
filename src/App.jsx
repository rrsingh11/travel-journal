import React from "react";
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./assets/data";
import "./App.css"

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
     <Navbar/>
     <div className="container">
      {card}
     </div>
     </>
  )
}