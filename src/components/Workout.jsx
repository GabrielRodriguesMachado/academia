/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function Workout({ treino, treinoEscolhido }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);
  return (
    <div className="text-center position-relative min-vh-100">
      <h1>{treino}</h1>
      <div className="position-absolute top-50 start-50 translate-middle min-vw-100">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          // indicators={false}
        >
          {treinoEscolhido.map((exercicio) => (
            <Carousel.Item key={exercicio.id}>
              <div>
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
                <label
                  htmlFor="exercicioConcluido"
                  className="form-check-label"
                >
                  <input
                    type="checkbox"
                    name="exercicioConcluido"
                    className="form-check-input"
                  />
                  Exercicio concluido
                </label>
                <br />
                <br />
                <br />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Workout;
