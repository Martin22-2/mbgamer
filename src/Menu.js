import React from 'react';

function Menu({ setSeccionActual }) {
  const estilosNavegacion = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    padding: '15px',
    backgroundColor: '#0a0a0a'
  };

  const estilosBoton = {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <nav style={estilosNavegacion}>
      <button style={estilosBoton} onClick={() => setSeccionActual('inicio')}>Inicio</button>
      <button style={estilosBoton} onClick={() => setSeccionActual('productos')}>Productos</button>
      <button style={estilosBoton} onClick={() => setSeccionActual('ofertas')}>Ofertas</button>
      <button style={estilosBoton} onClick={() => setSeccionActual('contacto')}>Contacto</button>
    </nav>
  );
}

export default Menu;