import { useState } from 'react'

import Mensagem from './components/Resultado';
import Calculo from './components/Calculo'


function App() {
  const [resultado, setResultado] = useState(null);
  return (



    <div className="container">
      <h1 className="title">Calculadora de IMC</h1>
      <Calculo setResultado={setResultado} resultado={resultado} />
      <Mensagem resultado={resultado} />
    </div>
  )
}

export default App
