import styled, { css } from 'styled-components';
import { Modal, ModalBody } from 'reactstrap';

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
    border: none;
  }

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

export const StyledModalBody = styled(ModalBody)`
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #d2d2d2;
`;

export const HeaderTitle = styled.div`
  padding: 1rem;
  font-weight: 500;
  flex: 1;
  text-align: center;
`;

export const HeaderExitButton = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  ${({ alignLeft }) =>
    alignLeft
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #d2d2d2;
  padding: 1rem;
`;

export const ModalFooterSeparator = styled.div`
  width: 1rem;
`;

export const ModalFooterButton = styled.button`
  display: flex;
  color: #ffffff;
  background-color: #0e5fbb;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 5px;
  border: 1px solid transparent;
  justify-content: center;

  svg {
    margin-right: 0.5rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: #505050;
      border-color: #505050;
      background-color: #ffffff;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.7;
    `}
`;
