import styled from 'styled-components';

export const Button = styled.button`
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #0061c0;
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #0061c0;
`;
