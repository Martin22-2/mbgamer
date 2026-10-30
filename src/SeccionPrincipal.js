import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (

    <main className="seccion-principal">

      <h1>Bienvenidos a MB Gamer</h1>

      <p>
        Encuentra los mejores videojuegos,
        accesorios y equipos gamer.
      </p>

      <img
        src="https://placehold.co/600x300/111827/00ff99?text=MB+Gamer"
        alt="Tienda MB Gamer"
        className="imagen-destacada"
      />

      <br />

      <button
        className="boton-accion"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >

        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}

      </button>

      {mostrarMensaje && (

        <p className="mensaje-sorpresa">
          ¡Felicidades! Tienes un 20% de descuento
          en tu primera compra en MB Gamer.
        </p>

      )}

    </main>

  );
}

export default SeccionPrincipal;