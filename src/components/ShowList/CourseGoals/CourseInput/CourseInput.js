import React, { useState, useEffect, useRef } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
import isURL from 'validator/lib/isURL';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [err, setErr] = useState('');
  const [showElement, setShowElement] = useState(true);
  const childrenRef = useRef('');


  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 5000);
  }, []);

  const limit = (string='', limit=0) => {
    return string.substring(0, limit) + "...";
  }

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0 ) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  
  

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 || !isURL(enteredValue)) {
      setIsValid(false);
      setErr('Invalid URL');
      return;
    }else {
      setIsValid(true);
      if(enteredValue.trim().length < 50 && isURL(enteredValue)){
        props.onAddGoal(enteredValue);
      }else if(enteredValue.trim().length > 50 && isURL(enteredValue)){
        props.onAddGoal(limit(enteredValue, 50));
      }
    }
  };

  
  

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <input 
        type="text" 
        onChange={goalInputChangeHandler}
        ref={childrenRef}
        />
        
      </div>
      <Button type="submit">Shorten</Button>
       <div>
        {showElement ? (
          <div>
            {err}
          </div>
        ) : (
          <div></div>
        )}{" "}
        </div>
    </form>
  );
};

export default CourseInput;
