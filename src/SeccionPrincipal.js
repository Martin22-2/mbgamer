import React from 'react';

function SeccionPrincipal({ seccionActual }) {
  return (
    <div style={{ padding: '40px', minHeight: '60vh' }}>
      {seccionActual === 'inicio' && (
        <section>
          <h1>Bienvenido a MBGAMER</h1>
          <p>Tu tienda de confianza en tecnología, componentes y accesorios gaming.</p>
        </section>
      )}

      {seccionActual === 'productos' && (
        <section>
          <h2>Catálogo de Productos</h2>
          <ul>
            <li>Tarjetas de Video (GPU)</li>
            <li>Procesadores (CPU)</li>
            <li>Memorias RAM</li>
            <li>Periféricos RGB</li>
          </ul>
        </section>
      )}

      {seccionActual === 'ofertas' && (
        <section>
          <h2>Ofertas Especiales</h2>
          <p>🔥 Descuentos del 20% en combos gaming durante este mes.</p>
        </section>
      )}

      {seccionActual === 'contacto' && (
        <section>
          <h2>Contáctanos</h2>
          <p>📧 Email: contacto@mbgamer.com</p>
          <p>📱 WhatsApp: +57 300 000 0000</p>
        </section>
      )}
    </div>
  );
}

export default SeccionPrincipal;