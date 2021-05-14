import React from 'react';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoMailOpenOutline } from 'react-icons/io5';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  display: block;
  font-size: 0.9rem;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${({ right }) =>
    right &&
    css`
      flex-direction: row;
      cursor: pointer;
    `}

  ${Label}:nth-child(3) {
    margin-top: 1rem;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  border-radius: 10px;

  ${ActionItem}:not(:last-child) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

const SubTitle = styled.span`
  font-size: 1.2rem;
  margin: 1rem 0rem;
  display: block;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ background }) =>
    background &&
    css`
      background-color: #d2d2d2;
    `}
`;

const IconLabel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
`;

function ExpiredActions() {
  return (
    <Container>
      <SubTitle>Aktionen</SubTitle>
      <ActionContainer>
        <ActionItem right>
          <IconContainer background>
            <IoMailOpenOutline size={25} />
          </IconContainer>
          <IconLabel>Nachricht senden</IconLabel>
          <IconContainer>
            <MdKeyboardArrowRight size={30} color='gray' />
          </IconContainer>
        </ActionItem>
      </ActionContainer>
    </Container>
  );
}

export default ExpiredActions;
