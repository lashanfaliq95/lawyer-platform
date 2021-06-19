import styled, { css } from 'styled-components';

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Pan = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 100%;
  h6 {
    padding: 10px 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid;
  border-color: ${({ secondary }) =>
    secondary ? '#ccecfa' : 'rgba(0, 0, 0, 0.125)'};
  background-color: ${({ secondary }) => (secondary ? '#ccecfa' : 'white')};
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
`;

export const InfoBoxContent = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 8px 8px 0;

  h6 {
    font-weight: 600;
  }

  span {
    font-size: 0.8rem;
    text-align: justify;
  }
`;

export const ChangePassword = styled(Card)`
  width: 45%;
`;

const InfoBoxContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled(InfoBoxContainer)`
  justify-content: flex-end;
  padding: 8px;
`;

export const Button = styled.button`
  align: right;
  border: none;
  border-radius: 8px;
  background-color: #105fbb;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.8rem;
  padding: 0.1rem;

  ${({ saved }) =>
    saved &&
    css`
      opacity: 0.6;
    `}

  div {
    border: ${({ saved }) => (saved ? '1px solid #ffffff' : 'none')};
    padding: 8px 12px;
    border-radius: 8px;
  }

  &:focus {
    outline: none;
  }
`;
