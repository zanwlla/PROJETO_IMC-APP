import React, { useState } from 'react';
import IMCResult from './IMCResult';

const IMCForm = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    if (peso && altura) {
      const alturaEmMetros = altura / 100;
      const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setIMC(imcCalculado);
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Peso (kg): </label>
          <input 
            type="number" 
            value={peso} 
            onChange={(e) => setPeso(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Altura (cm): </label>
          <input 
            type="number" 
            value={altura} 
            onChange={(e) => setAltura(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      
      
      {imc && <IMCResult imc={imc} />}
    </div>
  );
};

export default IMCForm;
