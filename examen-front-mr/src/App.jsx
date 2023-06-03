import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";

function App() {
  const [datos, setDatos] = useState({});

  const guardarDatos = (nombre, animal) => {
    //console.log(nombre, animal);
    setDatos ({nombre, animal})
  }
  
  return (
    <>
      <Form guardarDatos={guardarDatos} />
      {Object.keys(datos).length === 0 ? undefined : (
        <Card nombre={datos.nombre} animal={datos.animal} />
      )}

      
    </>
  );
  
}

export default App;
