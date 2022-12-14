/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import ChooseWorkout from './components/ChooseWorkout';
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
    <div className="">
      {
        treinoSelecionado
          ? (
            <ChooseWorkout
              handleTreinoA={handleTreinoA}
              handleTreinoB={handleTreinoB}
              handleTreinoC={handleTreinoC}
            />
          ) : (
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
          )
      }
    </div>
  );
}

export default App;
