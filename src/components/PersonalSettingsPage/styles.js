import styled, { css } from 'styled-components';

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Pan = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Container = styled.div`
  width: 100%;
  h6 {
    padding: 10px 0;
  }
`;

const Card = styled.div`
  width: 100%;
  border: 1px solid;
  border-color: ${({ secondary }) =>
    secondary ? '#ccecfa' : 'rgba(0, 0, 0, 0.125)'};
  background-color: ${({ secondary }) => (secondary ? '#ccecfa' : 'white')};
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
`;

const InfoBox = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const InfoBoxContainer = styled.div`
  display: flex;
`;

const InfoBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 8px 8px 0;

  h6 {
    font-weight: 600;
  }

  span {
    font-size: 0.8rem;
    text-align: justify;
  }
`;

const ContactInfo = styled(Card)`
  width: 100%;
`;

const FurtherInfo = styled(Card)`
  width: 100%;
  margin-bottom: 30px;
`;

const ManageSetting = styled(Card)`
  width: fit-content;
  display: flex;
`;

const SettingContent = styled(InfoBoxContent)`
  padding-top: 0;

  span.title {
    font-weight: 600;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;
    background-color: transparent;
    padding: 0;

    &:focus {
      outline: none;
    }
  }
`;

const ButtonContainer = styled(InfoBoxContainer)`
  justify-content: flex-end;
  padding: 8px;
`;

const Button = styled.button`
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

export {
  Button,
  ButtonContainer,
  Card,
  ContactInfo,
  Container,
  FurtherInfo,
  InfoBox,
  InfoBoxContent,
  InfoBoxContainer,
  IconContainer,
  Pan,
  ManageSetting,
  SettingContent,
  Title,
};
