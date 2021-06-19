import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import formatMessages from 'components/formatMessages';
import { ButtonContainerWrapper, Btn, SubTitle } from '../styles';

const ButtonContainer = ({ title, btnText, btnColor, linkTo }) => (
  <ButtonContainerWrapper>
    <SubTitle>{formatMessages(title)}</SubTitle>
    <Btn color={btnColor}>
      <Link to={linkTo}>{formatMessages(btnText)}</Link>
    </Btn>
  </ButtonContainerWrapper>
);

ButtonContainer.propTypes = {
  title: string.isRequired,
  btnText: string.isRequired,
  btnColor: string.isRequired,
  linkTo: string.isRequired,
};

export default ButtonContainer;
