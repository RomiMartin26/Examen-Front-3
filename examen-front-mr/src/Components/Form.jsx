import { useState } from "react";

function Form(props) {
  const [nombre, setNombre] = useState("");
  const [animal, setAnimal] = useState("");

 
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    
    if (nombre[0] === " ") {
      //console.log(nombre);
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (nombre.length <= 3) {
      //console.log(nombre);
      setError("Por favor chequea que la información sea correcta");
      return;
    }
    
    if (animal.length < 6) {
      //console.log(animal);
      setError("Por favor chequea que la información sea correcta 4");
      return;
    } else {
      setError("Correcto");
      //console.log(nombre);
      //console.log(animal);
      props.guardarDatos(nombre, animal)
      
      
      setNombre("");
      setAnimal("");
    }
  }

  return (
    <>
      <div className="container">
        <h2>Completa tus datos</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            value={nombre}
            placeholder="Ingrese su nombre"
            onChange={(e) => setNombre(e.target.value)}
          />

          <label htmlFor="animal">Animal Favorito </label>
          <input
            type="text"
            value={animal}
            placeholder="Ingresa tu animal favorito"
            onChange={(e) => setAnimal(e.target.value)}
          />

          {error != "Correcto" && <p>{error}</p>}
          <button type="submit">Enviar</button>
        </form>
      </div>

      
    </>
  );
}
export default Form;
