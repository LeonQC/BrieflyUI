import React, { useEffect, useState } from 'react';

import UrlCRUD from '../UrlCRUDFunctions/UrlCRUD';
import firebase from '../../../../firebase';
import './UrlValuesList.css';

export default function UrlValuesList(){
  const [urlList, setUrlList] = useState();

  useEffect(() => {
    const UrlRef = firebase.database().ref("VaildUrl");
    UrlRef.on("value", (snapshot) => {
      const urls = snapshot.val();
      const urlList = [];
      for (let id in urls) {
        urlList.push({ id, ...urls[id] });
      }
      
      setUrlList(urlList);
      console.log("urlList->", urlList);
    })
  },[]);
  return (
    <div className="goal-list">
      {urlList
        ? urlList.map((url, index) => <UrlCRUD url={url} key={index} />)
        : ""}
    </div>
  );
};



/*
 <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem 
        key={goal.id} 
        id={goal.id} 
        children={goal.children}
        onDelete={props.onDeleteItem}
        >
        </CourseGoalItem>
      ))}
    </ul>
*/