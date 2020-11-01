import React from 'react';
import { shape, string } from 'prop-types';
import { Button } from 'reactstrap';

import './styles.scss';
import formatMessages from 'components/formatMessages';
import messages from '../../../messages';

const FilterModal = ({ children, className }) => (
  <>
    <div className={className}>
      {children}
    </div>
    <div className="bottom-section">
      <Button color="link">{formatMessages(messages.delete)}</Button>
      <Button color="secondary">{formatMessages(messages.save)}</Button>
    </div>
  </>
);

FilterModal.propTypes = {
  children: shape({}).isRequired,
  className: string,
};

FilterModal.defaultProps = {
  className: 'top-section',
};

export default FilterModal;
