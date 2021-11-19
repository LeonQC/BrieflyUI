
import React, { useState, useEffect } from 'react';

import CourseGoalList from './ShowList/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './ShowList/CourseGoals/CourseInput/CourseInput';
import './Cards.css';

const Cards = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();


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
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: courseGoals, id: Math.random().toString() });
      return updatedGoals;
    });
    */
  };

  
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://tinyurl-82ef0-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedUrl = [];

      for (const key in responseData) {
        loadedUrl.push({
          id: key,
          children: responseData[key].children,
        });
      }

      setCourseGoals(loadedUrl);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section >
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }



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
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <React.Fragment>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler}/>
      </section>
      <section id="goals">{content}</section>
    </React.Fragment>
  );
};

export default Cards;
