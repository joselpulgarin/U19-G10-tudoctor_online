import {Suspense} from "react";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RuteoCompleto } from "./app/utilidades/rutas/RuteoCompleto";

const cargando = (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Cargando...</span>
  </div>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={cargando}>
          <RuteoCompleto />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
