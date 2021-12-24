import React from 'react';

import './UrlItem.css';

const UrlItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  
  return (
    <li className="goal-item">   
      <ul className="test">
          <li className="test1">

            
            <p>{props.longUrl.length < 50 ? props.longUrl : props.longUrl.substring(0, 50) + "..." }</p>
            
          </li>

          <li className="test2">
            {"https://briefly/" + props.shortUrl}
          </li>

          <li className="test2"> 
            <button onClick={deleteHandler}>copy</button>
          </li>
        </ul>
    </li>
  );
};

export default UrlItem;


