import styled from 'styled-components';
import { Container, Button } from 'reactstrap';

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  padding: 15px;
`;

const SubTitle = styled.span`div
  font-size: 14px;
  font-weight: bold;
  padding: 15px;
  padding-top:5px;
`;

const ConfirmationPageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const ConfirmationPage = styled.div`
  background-color: #f3f1f1;
  height: 100%;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
`;

const ButtonContainerWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 60px;
  text-align: center;
`;

const Btn = styled(Button)`
  color: white;
  padding: 10px;
  font-weight: bold;
  background-color: ${({ color }) => `${color || 'transparent'}`};
  a {
    color: white;
  }
`;

export {
  ConfirmationPage,
  ConfirmationPageContainer,
  HeaderRow,
  Title,
  SubTitle,
  ButtonContainerWrapper,
  Btn,
};
