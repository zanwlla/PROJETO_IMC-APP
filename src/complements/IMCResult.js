import React from 'react';

const IMCResult = ({ imc }) => {
  let classificacao = '';

  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 24.9) classificacao = 'Peso normal';
  else if (imc < 29.9) classificacao = 'Sobrepeso';
  else classificacao = 'Obesidade';

  return (
    <div>
      <h3>Seu IMC: {imc}</h3>
      <p>Classificação: {classificacao}</p>
    </div>
  );
};

export default IMCResult;
