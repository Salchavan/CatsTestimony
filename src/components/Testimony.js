import React from 'react';
import '../css/Testimony.css';

function Testimony(props) {
  return (
    <div className='div-testimony'>
      <div className='div-img-testimony'>
        <img
          className='img-testimony'
          src={require(`../img/img-${props.img}.jpg`)}
          alt={`imgTestimony-${props.name}`} 
          title={`Imagen de ${props.name}`}/>
      </div>
      <div className='div-text-testimony'>
        <h3 className='name-testimony'>
        {props.name} en {props.city}
        </h3>
        <h4 className='job-testimony'>
        {props.job} en {props.company}
        </h4>
        <p className='text-testimony'>
        "{props.text}"
        </p>
      </div >
    </div>
  );
};

export default Testimony;