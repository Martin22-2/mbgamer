import React, { useState } from 'react';
import './App.css';

function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');

  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    setTimeout(() => setMensajeEnviado(false), 4000);
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  // Lista de productos del catálogo
  const productos = [
    {
      id: 1,
      nombre: 'NVIDIA GeForce RTX 4070 Ti Super 16GB',
      categoria: 'Tarjetas Gráficas',
      precio: '$899.99',
      imagen: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      nombre: 'Procesador AMD Ryzen 7 7800X3D 8-Core',
      categoria: 'Procesadores',
      precio: '$389.00',
      imagen: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico RGB Switch Red Hot-Swap',
      categoria: 'Periféricos',
      precio: '$89.90',
      imagen: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      nombre: 'Monitor Gaming Curved 27" 165Hz 1ms QHD',
      categoria: 'Monitores',
      precio: '$279.99',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60'
    }
  ];

  // Lista de ofertas especiales
  const ofertas = [
    {
      id: 101,
      titulo: 'Combo Upgrade Pro: Ryzen 7 + B650 + 32GB RAM DDR5',
      precioAnterior: '$650.00',
      precioOferta: '$539.99',
      descuento: '17% OFF',
      tag: 'Más vendido'
    },
    {
      id: 102,
      titulo: 'Kit Periféricos Streamer (Teclado + Mouse 16000DPI + Audífonos 7.1)',
      precioAnterior: '$180.00',
      precioOferta: '$129.99',
      descuento: '28% OFF',
      tag: 'Edición limitada'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0e1117', color: '#f0f6fc', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      
      {/* HEADER / NAVEGACIÓN */}
      <header style={{ backgroundColor: '#161b22', borderBottom: '1px solid #30363d', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#58a6ff', letterSpacing: '1px' }}>MBGAMER</span>
          <span style={{ fontSize: '12px', backgroundColor: '#238636', color: '#fff', padding: '2px 8px', borderRadius: '12px' }}>STORE</span>
        </div>

        <nav style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
          {['inicio', 'productos', 'ofertas', 'contacto'].map((seccion) => (
            <button
              key={seccion}
              onClick={() => setSeccionActual(seccion)}
              style={{
                background: 'none',
                border: 'none',
                color: seccionActual === seccion ? '#58a6ff' : '#8b949e',
                borderBottom: seccionActual === seccion ? '2px solid #58a6ff' : '2px solid transparent',
                paddingBottom: '5px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.2s ease'
              }}
            >
              {seccion}
            </button>
          ))}
        </nav>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px', minHeight: '70vh' }}>
        
        {/* VISTA: INICIO */}
        {seccionActual === 'inicio' && (
          <div>
            <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '50px 30px', textAlign: 'center', marginBottom: '40px' }}>
              <h1 style={{ fontSize: '38px', marginBottom: '15px', color: '#ffffff' }}>Potencia tu setup al siguiente nivel</h1>
              <p style={{ color: '#8b949e', fontSize: '18px', maxWidth: '650px', margin: '0 auto 25px auto' }}>
                Especialistas en componentes de alto rendimiento, computadores ensamblados y accesorios gaming de última generación con garantía oficial.
              </p>
              <button 
                onClick={() => setSeccionActual('productos')}
                style={{ backgroundColor: '#238636', color: '#ffffff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Explorar Catálogo
              </button>
            </div>

            <h2 style={{ borderBottom: '1px solid #30363d', paddingBottom: '10px', marginBottom: '25px' }}>¿Por qué elegir MBGAMER?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h3 style={{ color: '#58a6ff' }}>🚀 Envíos Express</h3>
                <p style={{ color: '#8b949e', fontSize: '14px' }}>Entregas garantizadas y aseguradas a nivel nacional en 24/48 horas.</p>
              </div>
              <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h3 style={{ color: '#58a6ff' }}>🛡️ Garantía Directa</h3>
                <p style={{ color: '#8b949e', fontSize: '14px' }}>Soporte técnico especializado y garantía directa de fábrica en todos los productos.</p>
              </div>
              <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '8px', border: '1px solid #30363d' }}>
                <h3 style={{ color: '#58a6ff' }}>💳 Pagos Seguros</h3>
                <p style={{ color: '#8b949e', fontSize: '14px' }}>Múltiples medios de pago con encriptación de datos de extremo a extremo.</p>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: PRODUCTOS */}
        {seccionActual === 'productos' && (
          <div>
            <h2 style={{ marginBottom: '10px' }}>Catálogo Destacado</h2>
            <p style={{ color: '#8b949e', marginBottom: '30px' }}>Componentes de hardware seleccionados para máximo rendimiento.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '25px' }}>
              {productos.map((item) => (
                <div key={item.id} style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                  <div style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#58a6ff', textTransform: 'uppercase', fontWeight: 'bold' }}>{item.categoria}</span>
                      <h4 style={{ margin: '8px 0', fontSize: '15px' }}>{item.nombre}</h4>
                    </div>
                    <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#238636' }}>{item.precio}</span>
                      <button style={{ backgroundColor: '#21262d', color: '#c9d1d9', border: '1px solid #30363d', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>Añadir</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA: OFERTAS */}
        {seccionActual === 'ofertas' && (
          <div>
            <h2 style={{ marginBottom: '10px' }}>Ofertas de la Semana 🔥</h2>
            <p style={{ color: '#8b949e', marginBottom: '30px' }}>Precios especiales por tiempo limitado o hasta agotar existencias.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {ofertas.map((oferta) => (
                <div key={oferta.id} style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                  <div>
                    <span style={{ backgroundColor: '#da3633', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', marginRight: '10px' }}>{oferta.descuento}</span>
                    <span style={{ color: '#8b949e', fontSize: '13px' }}>{oferta.tag}</span>
                    <h3 style={{ margin: '10px 0 5px 0' }}>{oferta.titulo}</h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ textDecoration: 'line-through', color: '#8b949e', fontSize: '14px' }}>{oferta.precioAnterior}</div>
                    <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#3fb950', marginBottom: '8px' }}>{oferta.precioOferta}</div>
                    <button style={{ backgroundColor: '#238636', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Comprar Oferta</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA: CONTACTO */}
        {seccionActual === 'contacto' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h2>Atención al Cliente</h2>
              <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                ¿Tienes dudas sobre compatibilidad de componentes o necesitas asesoría personalizada para tu ensamble? Escríbenos.
              </p>
              
              <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <strong style={{ color: '#58a6ff' }}>📍 Ubicación:</strong>
                  <p style={{ margin: '3px 0', color: '#8b949e' }}>Av. Tecnológica #45-12, Sector Central</p>
                </div>
                <div>
                  <strong style={{ color: '#58a6ff' }}>📧 Correo Electrónico:</strong>
                  <p style={{ margin: '3px 0', color: '#8b949e' }}>soporte@mbgamer.com</p>
                </div>
                <div>
                  <strong style={{ color: '#58a6ff' }}>📞 LÍnea Directa / WhatsApp:</strong>
                  <p style={{ margin: '3px 0', color: '#8b949e' }}>+57 (300) 123-4567</p>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#161b22', padding: '25px', borderRadius: '8px', border: '1px solid #30363d' }}>
              <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Enviarnos un mensaje</h3>
              {mensajeEnviado && (
                <div style={{ backgroundColor: '#238636', color: '#fff', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
                  ¡Mensaje enviado con éxito! Te responderemos pronto.
                </div>
              )}
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', padding: '10px', borderRadius: '4px', color: '#fff' }}
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', padding: '10px', borderRadius: '4px', color: '#fff' }}
                />
                <textarea
                  rows="4"
                  placeholder="Escribe tu consulta aquí..."
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', padding: '10px', borderRadius: '4px', color: '#fff', resize: 'vertical' }}
                ></textarea>
                <button type="submit" style={{ backgroundColor: '#58a6ff', color: '#0d1117', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#161b22', borderTop: '1px solid #30363d', padding: '20px', textAlign: 'center', color: '#8b949e', fontSize: '14px' }}>
        © {new Date().getFullYear()} MBGAMER. Todos los derechos reservados.
      </footer>

    </div>
  );
}

export default App;