import React from 'react';
import { shape, func } from 'prop-types';

import './styles.scss';
import formatMessages from 'components/formatMessages';

const BottomTransitionButton = ({ btnText, onClick }) => (
  <div className="bottom-transition-btn">
    <button onClick={onClick} type="button">
      <p className="fromLeft">{formatMessages(btnText)}</p>
    </button>
  </div>
);

BottomTransitionButton.propTypes = {
  btnText: shape({}).isRequired,
  onClick: func.isRequired,
};

export default BottomTransitionButton;
