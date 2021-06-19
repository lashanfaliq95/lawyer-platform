import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { defineMessages } from 'react-intl';
import { FaRegCalendar } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

import intl from 'helpers/intlHelper';
import ProAccountContainer from 'components/Shared/ProAccountContainer';
import TitlePane from './components/TitlePane';

const messages = defineMessages({
  personalInformation: {
    id: 'app.proAccountPage.personalInformation',
    defaultMessage: 'Personal Information',
  },
  personalInformationDesc: {
    id: 'app.proAccountPage.personalInformationDesc',
    defaultMessage: 'You enter all necessary information about yourself',
  },
  securitySettings: {
    id: 'app.proAccountPage.securitySettings',
    defaultMessage: 'Security Settings',
  },
  securitySettingsDesc: {
    id: 'app.proAccountPage.securitySettingsDesc',
    defaultMessage: 'Change your password and manage your devices',
  },
  publicProfile: {
    id: 'app.proAccountPage.publicProfile',
    defaultMessage: 'Public Profile',
  },
  publicProfileDesc: {
    id: 'app.proAccountPage.publicProfileDesc',
    defaultMessage: 'Manage your avoplan profile site for your client',
  },
  users: {
    id: 'app.proAccountPage.users',
    defaultMessage: 'Users',
  },
  usersDesc: {
    id: 'app.proAccountPage.usersDesc',
    defaultMessage:
      'Enlarge your team with further experts with your avoplan account',
  },
  legalIssues: {
    id: 'app.proAccountPage.legalIssues',
    defaultMessage: 'Legal Issues',
  },
  legalIssuesDesc: {
    id: 'app.proAccountPage.legalIssuesDesc',
    defaultMessage: 'Edit your legal issues for your clients to select ',
  },
  calendarSettings: {
    id: 'app.proAccountPage.calendarSettings',
    defaultMessage: 'Calendar Settings',
  },
  calendarSettingsDesc: {
    id: 'app.proAccountPage.calendarSettingsDesc',
    defaultMessage: 'Settings for your calendar and appointments',
  },
  locations: {
    id: 'app.proAccountPage.locations',
    defaultMessage: 'Locations',
  },
  locationsDesc: {
    id: 'app.proAccountPage.locationsDesc',
    defaultMessage: 'Add further locations to your profile',
  },
  help: {
    id: 'app.proAccountPage.help',
    defaultMessage: 'Help',
  },
  helpDesc: {
    id: 'app.proAccountPage.helpDesc',
    defaultMessage: 'Get assistance or send us feedback',
  },
  paymentAndInvoices: {
    id: 'app.proAccountPage.paymentAndInvoices',
    defaultMessage: 'Payment and Invoices',
  },
  paymentAndInvoicesDesc: {
    id: 'app.proAccountPage.paymentAndInvoicesDesc',
    defaultMessage:
      'Update your payment information and download your inovices',
  },
});

const ListContainer = styled.div`
  margin-top: 1rem;
`;

const StyledRow = styled(Row)`
  margin: 0rem -1rem;
`;

const StyledCol = styled(Col)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.13);
  cursor: pointer;
`;

const IconContainer = styled.div``;

const TitleContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.4rem;
  margin-right: 1rem;
`;

const Description = styled.div`
  margin-top: 0.5rem;
`;

const PAGE_TYPES = [
  {
    id: 'personal',
    title: intl.formatMessage(messages.personalInformation),
    description: intl.formatMessage(messages.personalInformationDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/personal',
  },
  {
    id: 'securitySettings',
    title: intl.formatMessage(messages.securitySettings),
    description: intl.formatMessage(messages.securitySettingsDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/security-settings',
  },
  {
    id: 'publicProfile',
    title: intl.formatMessage(messages.publicProfile),
    description: intl.formatMessage(messages.publicProfileDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/public-profile',
  },
  {
    id: 'users',
    title: intl.formatMessage(messages.users),
    description: intl.formatMessage(messages.usersDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/users',
  },
  {
    id: 'legalIssues',
    title: intl.formatMessage(messages.legalIssues),
    description: intl.formatMessage(messages.legalIssuesDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/legal-issues',
  },
  {
    id: 'calendarSettings',
    title: intl.formatMessage(messages.calendarSettings),
    description: intl.formatMessage(messages.calendarSettingsDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/calendar-settings',
  },
  {
    id: 'locations',
    title: intl.formatMessage(messages.locations),
    description: intl.formatMessage(messages.locationsDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/locations',
  },
  {
    id: 'help',
    title: intl.formatMessage(messages.help),
    description: intl.formatMessage(messages.helpDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/help',
  },
  {
    id: 'paymentAndInvoices',
    title: intl.formatMessage(messages.paymentAndInvoices),
    description: intl.formatMessage(messages.paymentAndInvoicesDesc),
    icon: FaRegCalendar,
    route: '/pro/my-account/payment-and-invoices',
  },
];

function ProAccountPage() {
  const history = useHistory();

  function handleOnClick(selectedRoute) {
    history.push(selectedRoute);
  }

  return (
    <ProAccountContainer>
      <TitlePane />
      <ListContainer>
        <StyledRow>
          {PAGE_TYPES.map(({ icon: Icon, title, description, id, route }) => (
            <StyledCol xs={12} sm={6} md={4} key={id}>
              <ItemContainer
                onClick={() => {
                  handleOnClick(route);
                }}
              >
                <IconContainer>
                  <Icon size={30} />
                </IconContainer>
                <TitleContainer>
                  <Title>{title}</Title>
                  <IoIosArrowForward size={20} />
                </TitleContainer>
                <Description>{description}</Description>
              </ItemContainer>
            </StyledCol>
          ))}
        </StyledRow>
      </ListContainer>
    </ProAccountContainer>
  );
}

export default ProAccountPage;
