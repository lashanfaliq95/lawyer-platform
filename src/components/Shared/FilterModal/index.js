import React from 'react';
import { shape, string } from 'prop-types';
import { Button } from 'reactstrap';

import './styles.scss';

const FilterModal = ({ children, className }) => (
  <>
    <div className={className}>
      {children}
    </div>
    <div className="bottom-section">
      <Button color="link">Delete</Button>
      <Button color="secondary">save</Button>
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
