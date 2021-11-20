
import React, { useState, useCallback, useEffect } from 'react';

import CourseGoalList from '../../ShowList/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from '../../ShowList/CourseGoals/CourseInput/CourseInput';
import './InputForm.css';

const InputForm = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://tinyurl-82ef0-default-rtdb.firebaseio.com/tinyurl.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedurl = [];

      for (const key in data) {
        loadedurl.push({
          id: key,
          children: data[key].children,
        });
      }
      setCourseGoals(loadedurl);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);


  async function addGoalHandler(courseGoals){
    const response = await fetch('https://tinyurl-82ef0-default-rtdb.firebaseio.com/tinyurl.json', {
      method: 'POST',
      body: JSON.stringify(courseGoals),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    /*
    setCourseGoals((data) => {
      const updatedGoals = [...data];
      updatedGoals.unshift({ text: courseGoals, id: Math.random().toString() });
      return updatedGoals;
    });
    */
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}></p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals}  onDeleteItem={deleteItemHandler} />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section id="goals">{content}</section>
    </React.Fragment>
  );
};

export default InputForm;
