// Pantalla inicial provisoria de AM.
// Sirve solo para comprobar que el build y el pipeline funcionan;
// se reemplaza cuando empecemos con las pantallas reales del MVP.

function App() {
  return (
    <main className="contenedor">
      <h1>AM</h1>
      <p>Asset Management: stock y asignación de activos.</p>
      <p className="nota">Versión {__APP_VERSION__} · en construcción</p>
    </main>
  )
}

export default App
