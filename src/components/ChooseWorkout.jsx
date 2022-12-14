/* eslint-disable react/prop-types */
import React from 'react';

function ChooseWorkout({ handleTreinoA, handleTreinoB, handleTreinoC }) {
  return (
    <div>
      <h1>Escolha o treino</h1>
      <div className="">
        <button
          onClick={handleTreinoA}
          type="button"
        >
          Treino A
        </button>
        <button
          onClick={handleTreinoB}
          type="button"
        >
          Treino B
        </button>
        <button
          onClick={handleTreinoC}
          type="button"
        >
          Treino C
        </button>
      </div>
    </div>
  );
}

export default ChooseWorkout;
