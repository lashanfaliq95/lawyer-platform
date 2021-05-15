import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';
import { defineMessages, useIntl } from 'react-intl';
import { useSetState } from 'react-use';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { FaRegCalendarTimes } from 'react-icons/fa';

import { AppointmentPropType } from 'helpers/types';
import { APPOINTMENT_TYPES } from 'components/Shared/constants';
import Appointment from 'components/ProUserAppointments/components/Appointment';

const messages = defineMessages({
  title: {
    id: 'app.proAppointment.appointmentCancel.title',
    defaultMessage: 'Deny Inquiry',
  },
  subTitle: {
    id: 'app.proAppointment.appointmentCancel.subTitle',
    defaultMessage: 'Do you really want to deny the inquiry?',
  },
  cancel: {
    id: 'app.proAppointment.appointmentCancel.cancel',
    defaultMessage: 'Cancel',
  },
  denyInquiry: {
    id: 'app.proAppointment.appointmentCancel.denyInquiry',
    defaultMessage: 'Reschedule Appointment',
  },
  inquiryDenied: {
    id: 'app.proAppointment.appointmentCancel.inquiryDenied',
    defaultMessage: 'Appointment Rescheduled',
  },
});

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const SubTitle = styled.div`
  font-size: 15px;
`;

const Container = styled.div`
  display: flex;

  * {
    font-family: 'Montserrat', arial, sans-serif;
  }
`;

const AppointmentContainer = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 1rem;

  div {
    border-bottom: none;
  }
`;

const IconContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  padding-right: 2rem;
`;

const Footer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const ButtonSeparator = styled.div`
  width: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }

  ${({ primary, disabled, success }) => {
    if (success) {
      return css`
        color: #ffffff;
        background-color: #478bba;
      `;
    }
    if (disabled) {
      return css`
        color: #ffffff;
        background-color: #7f7f7f;
      `;
    }
    if (primary) {
      return css`
        color: #ffffff;
        background-color: #0061c0;
      `;
    }
    return css`
      color: #0061c0;
    `;
  }}
`;

const CheckMark = styled(IoCheckmarkOutline)`
  margin-right: 0.5rem;
`;

function AppointmentCancel({ appointment, isOpen, onToggle }) {
  const intl = useIntl();

  const [{ isCancelLoading, isCancelSuccess }, setState] = useSetState({
    isCancelLoading: false,
    isCancelSuccess: false,
  });

  function handleCancel() {
    //  TODO: Reschedule API call.
    setState({ isCancelSuccess: true });

    setTimeout(() => {
      onToggle();
    }, 4000);
  }

  return (
    <Modal
      backdrop='static'
      isOpen={isOpen}
      toggle={onToggle}
      centered
      size='lg'
    >
      <ModalBody>
        <Container>
          <IconContainer>
            <FaRegCalendarTimes size={40} />
          </IconContainer>
          <DetailContainer>
            <Title>{intl.formatMessage(messages.title)}</Title>
            <SubTitle>{intl.formatMessage(messages.subTitle)}</SubTitle>
            {appointment.type === APPOINTMENT_TYPES.UPCOMING && (
              <AppointmentContainer>
                <Appointment appointment={appointment} />
              </AppointmentContainer>
            )}
          </DetailContainer>
          <Footer>
            <Button onClick={onToggle}>
              {intl.formatMessage(messages.cancel)}
            </Button>
            <ButtonSeparator />
            <Button
              primary
              success={isCancelSuccess}
              disabled={isCancelLoading || isCancelSuccess}
              onClick={handleCancel}
            >
              {isCancelSuccess && <CheckMark />}
              {isCancelSuccess
                ? intl.formatMessage(messages.inquiryDenied)
                : intl.formatMessage(messages.denyInquiry)}
            </Button>
          </Footer>
        </Container>
      </ModalBody>
    </Modal>
  );
}

AppointmentCancel.propTypes = {
  appointment: AppointmentPropType.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

AppointmentCancel.defaultProps = {
  isOpen: false,
  onToggle: () => {},
};

export default AppointmentCancel;
