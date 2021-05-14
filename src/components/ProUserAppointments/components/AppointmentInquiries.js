import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { AppointmentPropType } from 'helpers/types';
import AppointmentInquiry from './AppointmentInquiry';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  display: block;
  padding: 1rem 0;
  font-weight: 500;
`;

function AppointmentInquiries({ inquiries, onInquiryClick }) {
  return (
    <Container>
      <Title>Ausstehend</Title>
      {inquiries.map((inquiry) => (
        <AppointmentInquiry
          inquiry={inquiry}
          key={inquiry.id}
          onInquiryClick={onInquiryClick}
        />
      ))}
    </Container>
  );
}

AppointmentInquiries.propTypes = {
  inquiries: PropTypes.arrayOf(AppointmentPropType.isRequired).isRequired,
  onInquiryClick: PropTypes.func,
};

AppointmentInquiries.defaultProps = {
  onInquiryClick: () => {},
};

export default AppointmentInquiries;
