/* eslint-disable react/prop-types */
import React from 'react';

function ChooseWorkout({ handleTreinoA, handleTreinoB, handleTreinoC }) {
  return (
    <div className="text-center">
      <h1>Escolha o treino</h1>
      <div className="btn-group-vertical">
        <button
          onClick={handleTreinoA}
          type="button"
          className="btn btn-primary"
        >
          Treino A
        </button>
        <button
          onClick={handleTreinoB}
          type="button"
          className="btn btn-primary"
        >
          Treino B
        </button>
        <button
          onClick={handleTreinoC}
          type="button"
          className="btn btn-primary"
        >
          Treino C
        </button>
      </div>
    </div>
  );
}

export default ChooseWorkout;
