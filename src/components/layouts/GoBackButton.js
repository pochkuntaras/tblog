import React from 'react';
import history from 'helpers/history';

const GoBackButton = () => (
  <button
   className="button button_blue"
   onClick={() => history.goBack()}
  >Back</button>
);

export default GoBackButton;
