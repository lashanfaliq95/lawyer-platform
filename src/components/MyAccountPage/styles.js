import styled from 'styled-components';
import { Container, Button, ModalBody, Modal, Col } from 'reactstrap';

import Icon from 'components/Shared/Icon';

const MyAccountPageContainer = styled(Container)`
  background-color: #fbfbfb;
  padding: 1% 2% 1% 2%;
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-width: 2px;
  }
  input[type='text']:focus {
    box-shadow: 0 0 0 rgb(255, 255, 255);
  }
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-left: -15%;
`;

const LogoutIcon = styled(Icon)`
  background-color: #dedede;
  border-radius: 30px;
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-right: -16%;

  > svg {
    margin-left: 8px;
    margin-top: 7px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex};
  background-color: ${(props) => (props.secondary ? '#ccecfa' : 'white')};
  padding: 20px;
  border-radius: 10px;
  width: 25%;
  height: fit-content;
  border: 1px solid;
  border-color: ${(props) =>
    (props.secondary ? '#ccecfa' : 'rgba(0, 0, 0, 0.125)')};
  .pwd-bar-wrapper {
    width: 60%;
  }
`;

const CardExternalTitle = styled.span`
  font-weight: bold;
  position: absolute;
  top: -30px;
  left: 0;
`;

const CartTitle = styled.span`
  font-weight: bold;
  margin-left: 45px;
`;

const CardBody = styled.div`
  display: flex;
  padding: 10px;
`;

const CardContent = styled.span`
  margin: 0 10px;
`;

const CardBtn = styled(Button)`
  width: fit-content;
  width: -moz-fit-content;
  background-color: #105fbb;
  border-color: #105fbb;
  flex-wrap: flex;
  align-self: flex-end;

  &:hover {
    background-color: #004079;
    border-color: #004079;
  }
`;

const DeleteAccountModal = styled(Modal)`
  .modal-content {
    width: 650px;
  }

  .modal-header {
    border-bottom: none;
  }

  button {
    height: 40px;
  }
`;

const DeleteAccountModalBody = styled(ModalBody)`
  display: flex;
`;

const DeleteAccountModalContent = styled.span`
  width: 330px;
`;

const DeleteAccountButtonGroup = styled.div`
  padding: 0 15px 50px;
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`;

export {
  MyAccountPageContainer,
  Row,
  Col,
  Title,
  LogoutIcon,
  Card,
  CartTitle,
  CardExternalTitle,
  CardBody,
  CardContent,
  CardBtn,
  DeleteAccountModal,
  DeleteAccountModalBody,
  DeleteAccountModalContent,
  DeleteAccountButtonGroup,
};
