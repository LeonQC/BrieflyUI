import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));

  return (
    <li className="goal-item" onClick={deleteHandler}>   
      <ul className="test">
          <li className="test1">
            <p>{props.children.length < 50 ? props.children : props.children.substring(0, 50) + "..." }</p>
          </li>

          <li className="test2">
            {"https://brief.ly/" + makeid(5)}
          </li>

          <li className="test2"> 
            <button>copy</button>
          </li>
        </ul>
    </li>
  );
};

export default CourseGoalItem;


