import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>   
      <ul className="test">
          <li className="test1">
            <p>{props.children.length < 50 ? props.children : props.children.substring(0, 50) + "..." }</p>
          </li>

          <li className="test2">
            {"https://brief.ly/31K0kwi"}
          </li>

          <li className="test2"> 
            <button>copy</button>
          </li>
        </ul>
    </li>
  );
};

export default CourseGoalItem;


