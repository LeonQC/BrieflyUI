
import React from 'react';

import UrlValuesList from '../../ShowList/UrlValues/UrlList/UrlValuesList';
import UrlValuesForm from '../../ShowList/UrlValues/UrlFrom/UrlValuesForm';
import './OutputForm.css';

const OutputForm = () => {
  return (
    <React.Fragment>
      <section id="goal-form">
        <UrlValuesForm/>
      </section>
      <section>
      </section>
      <section id="goals">
        <UrlValuesList/>
        </section>
    </React.Fragment>
  );
};

export default OutputForm;
