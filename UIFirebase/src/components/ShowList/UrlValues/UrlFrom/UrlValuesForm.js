import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './UrlValuesForm.module.css';
import isURL from 'validator/lib/isURL';
import firebase from '../../../../firebase';

const UrlValuesForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 || !isURL(enteredValue)) {
      return;
    }
    const URLRef = firebase.database().ref("VaildUrl");
    const URL = {
      enteredValue,
    }
    URLRef.push(URL);
  };
    

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0 ) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <input 
        type="text" 
        placeholder="Enter a vaild URL..."
        name="enteredValue"
        onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Shorten</Button>
    </form>
  );
};

export default UrlValuesForm;
