import React from 'react';
import styled from 'styled-components';
import { FaUser, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Title = styled.span`
  padding: 1rem;
`;

const LinksContainer = styled.div`
  display: flex;
`;

const CustomLink = styled(Link)`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;

  &:hover {
    color: #000000;
    text-decoration: none;
  }
`;

const CustomLinkText = styled.span`
  margin-left: 0.5rem;
`;

function TopBar() {
  return (
    <Container>
      <Title>Avoplan Pro</Title>
      <LinksContainer>
        <CustomLink>
          <FaQuestionCircle />
          <CustomLinkText>Hilfe</CustomLinkText>
        </CustomLink>
        <CustomLink to='/pro/login'>
          <FaUser />
          <CustomLinkText>Anmelden</CustomLinkText>
        </CustomLink>
      </LinksContainer>
    </Container>
  );
}

export default TopBar;
