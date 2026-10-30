import React from "react";

import Menu from "./Menu";

import SeccionPrincipal from "./SeccionPrincipal";

import Footer from "./Footer";

import "./App.css";

function App() {

  return (

    <div className="contenedor-app">

      <Menu />

      <SeccionPrincipal />

      <Footer />

    </div>

  );

}

export default App;