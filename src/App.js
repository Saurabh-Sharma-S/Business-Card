import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "../src/index.css";

export default function App() {
  return (
    <div className="container">
    <Card />
    <Header />
    <Main />
    <Footer />
    </div>
    
  )
}