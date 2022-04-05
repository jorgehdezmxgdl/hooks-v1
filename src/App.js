import React, {useState} from 'react';

function App1() {
  const estado = React.useState()
  const valor = estado[0]
  const setValor = estado[1]
  console.log("valor", valor)
  console.log("funcion", setValor);

  return (<div> Hooks inicio </div>)
}

function App2() {
  const [valor, setValor] = useState(0)
  
  return (
     <div> 
        <p> Dale click al boton para incrementar el contador</p>
        <button onClick={() => setValor(valor + 1)} > Incrementa </button>
        <p> El valor del contador es: {valor} </p>
     </div>
  )
}

function App() {
  const [_json, setJson] = useState({
    nombre: "Alexei",
    edad: 0
  })
  
  return (
     <div> 
        <p> Nombre:  {_json.nombre} </p>
        <input type="text" 
          onChange={(e) => { 
          setJson({..._json, 
          nombre: e.target.value}) 
        }} />
     </div>
  )
}



export default App;
