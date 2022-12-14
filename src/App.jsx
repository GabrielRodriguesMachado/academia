/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ChooseWorkout from './components/ChooseWorkout';
import Workout from './components/Workout';
import { treinoA, treinoB, treinoC } from './mocks/treinos';

function App() {
  const [treino, setTreino] = useState('');
  const [treinoSelecionado, setTreinoSelecionado] = useState(true);
  const [treinoEscolhido, setTreinoEscolhido] = useState([]);

  function handleTreinoA() {
    setTreino('Treino A');
    setTreinoEscolhido(treinoA);
    setTreinoSelecionado(false);
  }

  function handleTreinoB() {
    setTreino('Treino B');
    setTreinoEscolhido(treinoB);
    setTreinoSelecionado(false);
  }

  function handleTreinoC() {
    setTreino('Treino C');
    setTreinoEscolhido(treinoC);
    setTreinoSelecionado(false);
  }

  function handleRealizado(id) {
    const treinoAtualizado = treinoEscolhido.filter((exercicio) => exercicio.id !== id);
    setTreinoEscolhido(treinoAtualizado);
  }
  return (
    <div className="container bg-dark text-light min-vw-100 min-vh-100">
      {
        treinoSelecionado
          ? (
            <ChooseWorkout
              handleTreinoA={handleTreinoA}
              handleTreinoB={handleTreinoB}
              handleTreinoC={handleTreinoC}
            />
          ) : (
            <Workout
              treino={treino}
              treinoEscolhido={treinoEscolhido}
              handleRealizado={handleRealizado}
            />
          )
      }
    </div>
  );
}

export default App;
