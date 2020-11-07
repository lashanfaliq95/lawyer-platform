import React from 'react';
import { shape, string, func } from 'prop-types';
import { Button } from 'reactstrap';

import './styles.scss';
import formatMessages from 'components/formatMessages';
import messages from '../../../messages';

const FilterModal = ({
  children, className, onClickSave, onClickCancel,
}) => (
  <>
    <div className={className}>{children}</div>
    <div className="bottom-section">
      <Button color="link" onClick={onClickCancel}>
        {formatMessages(messages.delete)}
      </Button>
      <Button color="secondary" onClick={onClickSave}>
        {formatMessages(messages.save)}
      </Button>
    </div>
  </>
);

FilterModal.propTypes = {
  children: shape({}).isRequired,
  className: string,
  onClickSave: func.isRequired,
  onClickCancel: func.isRequired,
};

FilterModal.defaultProps = {
  className: 'top-section',
};

export default FilterModal;
