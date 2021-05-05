import styled, { css } from 'styled-components';

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

  &:disabled {
    background-color: #7f7f7f;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #0061c0;
  ${({ hasBorder }) => hasBorder &&
    css`
      border: 2px solid #0061c0;
    `}

  &:focus {
    outline: none;
  }
`;

export default {};
