/* eslint-disable react/prop-types */
import React from 'react';

function Workout({ treino, treinoEscolhido, handleRealizado }) {
  return (
    <div>
      <h1>{treino}</h1>
      {treinoEscolhido.map((exercicio) => (
        <div key={exercicio.id}>
          <p>{exercicio.nome}</p>
          <p>
            Séries:
            {' '}
            {exercicio.series}
          </p>
          <p>
            Repetições
            {' '}
            {exercicio.repeticoes}
          </p>
          <p>
            Carga:
            {' '}
            {exercicio.carga}
            kg
          </p>
          {/* <p className="text-gray-200 text-base">Realizado?</p>
            <input type="checkbox" name="" id="" className="text-gray-700 text-base" /> */}
          <button
            onClick={() => handleRealizado(exercicio.id)}
            type="button"
          >
            Realizado
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Workout;
