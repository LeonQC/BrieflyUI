import React from 'react';
import './Cards.css';
import { Button } from './Button';

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
          <form>
            <input
              className='cards-input'
              name='text'
              type='text'
              placeholder='Shorten your link'
            />
            <Button 
              className='btns'
              buttonStyle='btn--test2'
              buttonSize='btn--large2'
              >Shorten</Button>
          </form>
        </div>
      </div>
  );
}

export default Cards;