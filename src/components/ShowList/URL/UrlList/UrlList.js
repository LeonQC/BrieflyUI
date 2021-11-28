import React from 'react';

import UrlItem from '../UrlItem/UrlItem';
import './UrlList.css';

const UrlList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <UrlItem 
        key={goal.id} 
        id={goal.id} 
        children={goal.children}
        onDelete={props.onDeleteItem}
        >
        </UrlItem>
      ))}
    </ul>
  );
};

export default UrlList;



/*<ul className="test">
<li className="test1">
{goal.text}
</li>

<li className="test2">
{"https://brief.ly/31K0kwi"}
</li>
<li className="test2"> 
  <button>copy</button>
</li>

</ul>
*/