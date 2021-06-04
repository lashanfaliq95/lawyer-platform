import { Modal, ModalBody } from 'reactstrap';
import styled, { css } from 'styled-components';

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
    border: none;
  }
`;

export const StyledModalBody = styled(ModalBody)`
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid #d2d2d2;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  ${({ selected }) =>
    selected &&
    css`
      color: #006ea9;
    `}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  position: relative;

  ${Title} {
    border: none;
    cursor: pointer;

    &:hover {
      color: #006ea9;
    }
  }
`;

export const TitleContainerSeparator = styled.div`
  height: 25px;
  border-right: 1px solid #d2d2d2;
`;

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 0.5rem;
`;

export const Value = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export const ValueSwitchContainer = styled.div`
  display: flex;

  ${Value} {
    flex: 1;
  }
`;

export const LineItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 0.5px solid #d2d2d2;
  transition: border 0.1s ease-in-out;
  border-left: 3px solid transparent;

  &:hover {
    border-left-color: #ff6066;
  }
`;

export const DetailsLineItemContainer = styled(LineItemContainer)`
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

export const MultiLineItemContainer = styled.div`
  display: flex;

  ${LineItemContainer}:nth-child(odd):not(:only-child) {
    border-right: 1px solid #d2d2d2;
  }
`;

export const EmptyButton = styled.div``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 13px;

  ${({ primary }) =>
    primary
      ? css`
          background-color: #006ea9;
          color: #ffffff;

          &:disabled {
            opacity: 0.8;
          }
        `
      : css`
          background-color: transparent;
          color: #dbdde1;
          text-decoration: underline;
          font-weight: 600;
        `}
`;

export const ValidationError = styled.span`
  color: red;
  font-size: 11px;
  margin-top: 5px;
`;

export const CancelButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  padding: 1rem;

  &:hover {
    svg {
      fill: #006ea9;
      transition: 0.3s all ease-in-out;
    }
  }
`;
