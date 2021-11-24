import React from 'react';
import firebase from '../../../../firebase';
import './UrlCRUD.css';

export default function UrlCRUD ({url}) {
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


const deleteUrl = () => {
  const URLRef = firebase.database().ref("VaildUrl").child(url.id);
  URLRef.remove();
};

console.log(makeid(5));

  return (
    <li className="goal-item">   
      <ul className="test">        
        
          <li className="test1">
            <p>{url.enteredValue.length < 50 ? url.enteredValue : url.enteredValue.substring(0, 50) + "..."}</p>
          </li>
          <li className="test2">
            {"https://brief.ly/" + makeid(5)}
          </li>

          <li className="test2"> 
            <button onClick={deleteUrl}>delete</button>
          </li>
        </ul>
    </li>
  );
};



