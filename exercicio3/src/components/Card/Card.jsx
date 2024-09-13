import Naoe from '../../assets/cardImg/naoe.jpeg';
import React from 'react';

function Card() {
  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="card" style={{ width: '260px', border: '5px solid black', margin: '0', padding: '0', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
        <div className="imagem">
          <img src={Naoe} alt="Imagem de Naoe" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div>
        <div className="paiDosTextos" style={{ margin: '2px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '52px' }}>Naoe</h1>
          <p>Naoe from the Iga clan</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
