
import React, {useEffect, useState} from 'react';


import UrlList from '../../ShowList/URL/UrlList/UrlList';
import UrlInput from '../../ShowList/URL/UrlInput/UrlInput';
import './OutputForm.css';

import axios from 'axios';
import { render } from '@testing-library/react';


const OutputForm = () => {
  
  const [courseGoals, setCourseGoals] = useState([]);
  /*
  , useCallback, useEffect 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
=======
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
  const fetchMoviesHandler = useCallback(async () => {
    
    setIsLoading(true);
    setError(null);
<<<<<<< HEAD
    

    
    try {
      const response = await fetch('http://localhost:8080/api/v1/url/getAll');
=======
   
    try {
      const response = await fetch('https://tinyurl-82ef0-default-rtdb.firebaseio.com/tinyurl.json');
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
<<<<<<< HEAD
      const loadedurl = [];
  
      for (const key in data) {
        loadedurl.push({
          id: key,
          longUrl: data[key].longUrl,
          shortUrl: data[key].shortUrl,
        });
      }

      setCourseGoals(loadedurl);
      console.log(data)
=======

      const loadedurl = [];

      for (const key in data) {
        loadedurl.push({
          id: key,
          children: data[key].children,
        });
      }
      setCourseGoals(loadedurl);
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

<<<<<<< HEAD
*/

  async function addGoalHandler(courseGoals){
    const response = await fetch('http://localhost:8080/url/transform/', {
      method: 'POST',
      body: JSON.stringify(courseGoals),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    axios.get("http://localhost:8080/api/v1/url/getAll")
    .then(response => {
      setCourseGoals(response.data);
    })
  };


  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/url/getAll")
    .then(response => {
      setCourseGoals(response.data);
    })
  },[setCourseGoals])
    /*
    
    const response = await fetch('https://urltest-417d3-default-rtdb.firebaseio.com/tinyurl.json', {

=======

  async function addGoalHandler(courseGoals){
    const response = await fetch('https://tinyurl-82ef0-default-rtdb.firebaseio.com/tinyurl.json', {
      method: 'POST',
      body: JSON.stringify(courseGoals),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    window.location.reload();
    console.log(data);
    
    /*
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
    setCourseGoals((data) => {
      const updatedGoals = [...data];
      updatedGoals.unshift({ text: courseGoals, id: Math.random().toString() });
      return updatedGoals;
    });
    */

 
  
  const deleteItemHandler = (goalId) => {
    axios.delete(`http://localhost:8080/api/v1/url/delete/${goalId}`)
    .then(res => {  
      console.log(res);  
      console.log(res.data);  
    });
        setCourseGoals((prevGoals) => {
        const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
        return updatedGoals;
        });
  };

  let content = (
    <p style={{ textAlign: 'center' }}></p>
  );

<<<<<<< HEAD
  if (courseGoals != null) {
=======
  if (courseGoals.length > 0) {
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
    content = (
      <UrlList items={courseGoals}  onDeleteItem={deleteItemHandler} />
    );
  }

<<<<<<< HEAD


render() 
=======
  
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
  return (
    <React.Fragment>
      <section id="goal-form">
        <UrlInput onAddGoal={addGoalHandler} />
      </section>
      <section>
      </section>
      <section id="goals">{content}</section>
    </React.Fragment>
  );
};

<<<<<<< HEAD
export default OutputForm;
=======
export default OutputForm;
>>>>>>> 79862af51ff5dfabbb3606d3849d55e3e886ed31
