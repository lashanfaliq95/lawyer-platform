import React, { useState } from 'react';
import { string, func, shape } from 'prop-types';
import { Input } from 'reactstrap';
import './styles.scss';

import Icon from 'components/Shared/Icon';
import formatMessage from 'components/formatMessages';

const getInputClassName = (prependIcon, appendIcon) => {
  if (prependIcon && appendIcon) {
    return { className: 'padding-left-right' };
  }
  if (prependIcon) {
    return { className: 'padding-left' };
  }
  if (appendIcon) {
    return { className: 'padding-right' };
  }
  return null;
};

const InputWithIcon = (props) => {
  const {
    prependIcon,
    appendIcon,
    value,
    onChange,
    placeholder,
    width,
    transitionText,
  } = props;

  const { className } = getInputClassName(prependIcon, appendIcon);
  const [transition, setTransition] = useState(false);
  const transitionDivClass = !transition ? 'transition-text' : 'transitioned';

  return (
    <div className="input-icons" style={{ width }}>
      {prependIcon && (
        <Icon
          name={prependIcon.name}
          className="icon"
          size="large"
          color={prependIcon.color}
        />
      )}
      <Input
        value={value}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
      />
      {transitionText && (
        <button
          className={`transition-button ${transitionDivClass}`}
          type="button"
          onClick={() => {
            setTransition(!transition);
          }}
        >
          <div>
            {appendIcon && (
              <Icon
                name="crosshairs"
                size="large"
                color="grey"
                onClick={() => {
                  setTransition(!transition);
                }}
              />
            )}
            <p>{formatMessage(transitionText)}</p>
            <Icon
              name="times-circle"
              className="icon"
              size="large"
              color={prependIcon.color}
            />
          </div>
        </button>
      )}
      {appendIcon && (
        <Icon
          name={appendIcon.name}
          className="icon right"
          size="large"
          color={appendIcon.color}
          onClick={() => {
            setTransition(!transition);
            appendIcon.onClick();
          }}
        />
      )}
    </div>
  );
};

InputWithIcon.propTypes = {
  prependIcon: shape({
    name: string.isRequired,
    color: string.isRequired,
  }),
  appendIcon: shape({
    name: string.isRequired,
    color: string.isRequired,
    onClick: func,
  }),
  value: string,
  onChange: func,
  placeholder: string,
  width: string,
  transitionText: shape({
    id: string.isRequired,
    defaultMessage: string.isRequired,
  }),
};

InputWithIcon.defaultProps = {
  value: '',
  prependIcon: null,
  appendIcon: null,
  placeholder: '',
  width: '',
  transitionText: null,
  onChange: () => {},
};

export default InputWithIcon;
