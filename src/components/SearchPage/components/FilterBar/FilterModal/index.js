import React from 'react';
import {
  shape, string, func, bool, arrayOf,
} from 'prop-types';
import { Button } from 'reactstrap';

import './styles.scss';
import formatMessages from 'components/formatMessages';
import messages from '../../../messages';

const FilterModal = ({
  children, className, onClickSave, onClickCancel, isCancelBtnDisabled, isSaveBtnDisabled,
}) => (
  <>
    <div className={className}>{children}</div>
    <div className="bottom-section">
      <Button color="link" onClick={onClickCancel} disabled={isCancelBtnDisabled}>
        {formatMessages(messages.delete)}
      </Button>
      <Button color="primary" onClick={onClickSave} disabled={isSaveBtnDisabled}>
        {formatMessages(messages.save)}
      </Button>
    </div>
  </>
);

FilterModal.propTypes = {
  children: arrayOf(shape({})).isRequired,
  className: string,
  onClickSave: func.isRequired,
  onClickCancel: func.isRequired,
  isCancelBtnDisabled: bool,
  isSaveBtnDisabled: bool,
};

FilterModal.defaultProps = {
  className: 'top-section',
  isCancelBtnDisabled: false,
  isSaveBtnDisabled: false,
};

export default FilterModal;
