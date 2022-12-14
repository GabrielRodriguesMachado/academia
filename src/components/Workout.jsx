/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function Workout({ treino, treinoEscolhido }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);
  return (
    <div className="text-center">
      <h1>{treino}</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
        controls={false}
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
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Workout;
