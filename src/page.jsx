"use client"
import Table from "./components/Table";
import Header from "./components/Header"
import AddVideoGame from "./components/AddVideogame"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditVideogame from "./components/EditVideogame";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/*" element={<Table />} />
          <Route exact path="/videogames" element={<Table />} />
          <Route exact path="/add-videogame" element={<AddVideoGame />} />
          <Route exact path="/edit-videogame/:id" element={<EditVideogame />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
