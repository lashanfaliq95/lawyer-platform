import React from 'react';
import styled from 'styled-components';
import { FaUser, FaQuestionCircle } from 'react-icons/fa';

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  border: 1px solid red;
  padding: 1rem;
`;

const LinksContainer = styled.div`
  border: 1px solid red;
  display: flex;
`;

const CustomLink = styled.div`
  border: 1px solid red;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <CustomLink>
          <FaUser />
          <CustomLinkText>Anmelden</CustomLinkText>
        </CustomLink>
      </LinksContainer>
    </Container>
  );
}

export default TopBar;
