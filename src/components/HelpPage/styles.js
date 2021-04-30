import styled from 'styled-components';
import {
  Container, ListGroupItem, Label, Button, Input,
} from 'reactstrap';

const HelpPageContainer = styled(Container)`
  background-color: #fbfbfb;
  padding: 1px;
  height: calc(100vh - 60px);
`;

const Content = styled.div`
  display: flex;
  margin: auto;
  margin: 5% auto 0;
  width: 60%;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
`;

const ListsContainer = styled.span`
  display: flex;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
  flex: 1;
`;

const ListTitle = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ListItem = styled(ListGroupItem)`
  a {
    color: black;
    text-decoration: none;
  }
`;

const ListItemDescription = styled.span`
  margin: 0 10px;
`;

const ContactFormContainer = styled(Container)``;

const FormContent = styled.div`
  padding: 20px;
`;

const FormSubHeading = styled(Label)`
  font-weight: bold;
`;

const FormInput = styled(Input)`
  margin: 20px 0;
  height: 150px !important;
`;

const FormSubmitBtn = styled(Button)`
  margin-top: 10px;
  background-color: #105fbb;
  border-color: #105fbb;

  &:hover {
    background-color: #004079;
    border-color: #004079;
  }
`;

export {
  HelpPageContainer,
  Content,
  Title,
  ListsContainer,
  ListTitle,
  ListWrapper,
  ListItem,
  ListItemDescription,
  ContactFormContainer,
  FormContent,
  FormSubHeading,
  FormInput,
  FormSubmitBtn,
};
