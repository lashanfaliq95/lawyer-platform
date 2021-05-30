import React, { useEffect } from 'react';
import { useSetState } from 'react-use';
import { bool, func, number, string } from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  border: 1px solid #dddddd;
  border-top: none;

  ${({ first }) =>
    first &&
    css`
      border-top: 1px solid #dddddd;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    `};

  ${({ last }) =>
    last &&
    css`
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    `};
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;

  ${({ active }) => {
    return active
      ? css`
          border-left: 5px solid #105fbb;
        `
      : css`
          border-left: 5px solid transparent;
        `;
  }}

  &:hover {
    border-left: 5px solid #105fbb;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;

const Name = styled.span`
  padding-left: 12px;
`;

function ClientItem({ id, firstName, lastName, first, last, active, onClick }) {
  const [{ avatarBg, avatarTxt }, setState] = useSetState({
    avatarBg: '',
    avatarTxt: '',
  });

  useEffect(() => {
    // for presentation purpose random avatar color is generated on the fly
    // alternatively avatar color could be set from outside the component
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const rgba = `rgba(${r}, ${g}, ${b}, 0.3)`;

    setState({
      avatarBg: rgba,
      avatarTxt: rgb,
    });

    // eslint-disable-next-line
  }, []);

  function onItemClick() {
    onClick(id);
  }

  return (
    <Container first={first} last={last} onClick={onItemClick}>
      <ContentContainer active={active}>
        <Avatar bg={avatarBg} color={avatarTxt}>
          {`${firstName.charAt(0)}${lastName.charAt(0)}`}
        </Avatar>
        <Name>{`${firstName} ${lastName}`}</Name>
      </ContentContainer>
    </Container>
  );
}

ClientItem.propTypes = {
  id: number.isRequired,
  firstName: string.isRequired,
  lastName: string.isRequired,
  first: bool.isRequired,
  last: bool.isRequired,
  active: bool,
  onClick: func.isRequired,
};

ClientItem.defaultProps = {
  active: false,
};

export default ClientItem;
