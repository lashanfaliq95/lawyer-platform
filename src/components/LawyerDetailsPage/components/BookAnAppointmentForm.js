import React from 'react';
import { useSetState } from 'react-use';
import { bool } from 'prop-types';
import { Form, FormGroup, Button, Input } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import Calender from 'components/SearchPage/components/Calender';

import RadioInputWithTick from 'components/Shared/RadioInputWithTick';
import NoNewClientsModal from './NoNewClientsModal';
import AppointmentBookingModal from './AppointmentBookingModal';

import messages from '../messages';

const BookAnAppointmentForm = ({
  doesLawyerAcceptNewClients,
  doesLawyerOfferPhoneAndVisitingAppointments,
  doesTheFirmHaveOnlyOneLawyer,
  requiresShortSummary,
  requiresApproval,
}) => {
  const [
    {
      showModal,
      showApprovalModal,
      isNotExistingClient,
      isExitingClient,
      typeOfLegalIssue,
      isClientWithInsurance,
      isClientWithoutInsurance,
      isAppointmentViaPhone,
      isPersonnelAppointment,
      expertOfLawFirm,
      summaryOfIssue,
    },
    setState,
  ] = useSetState({
    showModal: false,
    showApprovalModal: false,
    isNotExistingClient: false,
    isExitingClient: false,
    typeOfLegalIssue: '',
    isClientWithInsurance: false,
    isClientWithoutInsurance: false,
    isAppointmentViaPhone: false,
    isPersonnelAppointment: false,
    expertOfLawFirm: '',
    summaryOfIssue: '',
  });

  const onClickNotAExistingClient = () => {
    if (!doesLawyerAcceptNewClients) {
      setState({ showModal: true });
    }
  };

  const shouldShowStepFour =
    doesLawyerOfferPhoneAndVisitingAppointments &&
    (isNotExistingClient || isExitingClient) &&
    typeOfLegalIssue &&
    (isClientWithInsurance || isClientWithoutInsurance);

  const shouldShowStepFive =
    shouldShowStepFour &&
    (isPersonnelAppointment || isAppointmentViaPhone) &&
    !doesTheFirmHaveOnlyOneLawyer;

  const shouldShowStepSix =
    shouldShowStepFive && expertOfLawFirm && requiresShortSummary;
  return (
    <div className='right-section'>
      <div className='title'>
        {formatMessage(messages.bookAppointmentOnline)}
      </div>
      <div className='sub-title'>
        {formatMessage(messages.bookAppointmentInTwoMinutes)}
      </div>
      <div className='booking-section'>
        <Form>
          <div
            className={`form-section ${
              isNotExistingClient || isExitingClient ? 'active-section' : ''
            }`}
          >
            {formatMessage(messages.areYouAlreadyAClient)}
            <FormGroup check>
              <div className='check-box'>
                <RadioInputWithTick
                  name='existingClient'
                  checked={isNotExistingClient}
                  onClick={() => {
                    setState({
                      isNotExistingClient: !isNotExistingClient,
                      isExitingClient: false,
                    });
                  }}
                  onChange={onClickNotAExistingClient}
                  label={messages.no}
                />
              </div>
            </FormGroup>
            <FormGroup check>
              <RadioInputWithTick
                name='existingClient'
                checked={isExitingClient}
                onClick={() => {
                  setState({
                    isNotExistingClient: false,
                    isExitingClient: !isExitingClient,
                  });
                }}
                label={messages.iAmAlreadyAClient}
              />
            </FormGroup>
          </div>

          <div
            className={`form-section ${
              typeOfLegalIssue !== '' ? 'active-section' : ''
            }`}
          >
            <FormGroup>
              {formatMessage(messages.whatTypeOfLegalIssueIsIt)}
              <Input
                placeholder='Angelegenheit'
                value={typeOfLegalIssue}
                onChange={(e) => setState({ typeOfLegalIssue: e.target.value })}
              />
            </FormGroup>
          </div>

          <div
            className={`form-section ${
              isClientWithInsurance || isClientWithoutInsurance
                ? 'active-section'
                : ''
            }`}
          >
            {formatMessage(messages.doYouHaveLegalInsurance)}
            <FormGroup check>
              <RadioInputWithTick
                name='legalInsurance'
                checked={isClientWithoutInsurance}
                onClick={() => {
                  setState({
                    isClientWithInsurance: false,
                    isClientWithoutInsurance: true,
                  });
                }}
                label={messages.no}
              />
            </FormGroup>
            <FormGroup check>
              <RadioInputWithTick
                name='legalInsurance'
                checked={isClientWithInsurance}
                onClick={() => {
                  setState({
                    isClientWithInsurance: true,
                    isClientWithoutInsurance: false,
                  });
                }}
                label={messages.yesIHaveLegalInsurance}
              />
            </FormGroup>
          </div>

          {shouldShowStepFour && (
            <>
              <div
                className={`form-section ${
                  isPersonnelAppointment || isAppointmentViaPhone
                    ? 'active-section'
                    : ''
                }`}
              >
                {formatMessage(messages.selectTypeOfAppointment)}
                <FormGroup check>
                  <RadioInputWithTick
                    name='appointmentType'
                    checked={isAppointmentViaPhone}
                    onClick={() => {
                      setState({
                        isAppointmentViaPhone: true,
                        isPersonnelAppointment: false,
                      });
                    }}
                    label={messages.appointmentViaPhone}
                  />
                </FormGroup>
                <FormGroup check>
                  <RadioInputWithTick
                    name='appointmentType'
                    checked={isPersonnelAppointment}
                    onClick={() => {
                      setState({
                        isAppointmentViaPhone: false,
                        isPersonnelAppointment: true,
                      });
                    }}
                    label={messages.personnelAppointments}
                  />
                </FormGroup>
              </div>
            </>
          )}
          {shouldShowStepFive && (
            <>
              <div
                className={`form-section ${
                  expertOfLawFirm ? 'active-section' : ''
                }`}
              >
                <FormGroup>
                  {formatMessage(messages.whichExpertShouldAdviceYou)}
                  <Input
                    defaultValue=''
                    type='select'
                    onChange={(e) => {
                      setState({ expertOfLawFirm: e.target.value });
                    }}
                  >
                    <option hidden value=''>
                      Experte
                    </option>
                    <option value='Katja'>Katja</option>
                    <option value='Dr. Rainer'>Dr. Rainer</option>
                    <option value='Anne'>Anne</option>
                    <option value='Jan Niklas'>Jan Niklas</option>
                  </Input>
                </FormGroup>
              </div>
            </>
          )}
          {shouldShowStepSix && (
            <>
              <div
                className={`form-section ${
                  summaryOfIssue ? 'active-section' : ''
                }`}
              >
                <FormGroup>
                  {formatMessage(messages.summaryOfLegalIssue)}
                  <Input
                    placeholder='Ihr Text'
                    type='textarea'
                    onChange={(e) => {
                      setState({ summaryOfIssue: e.target.value });
                    }}
                  />
                </FormGroup>
              </div>
            </>
          )}
          <div className='form-section calender-wrapper'>
            {formatMessage(messages.selectTimeSlot)}
            <Calender id='mock1' />
            <Button
              className='appointment-btn'
              color='primary'
              onClick={() => {
                setState({ showApprovalModal: true });
              }}
            >
              {formatMessage(messages.bookTheAppointment)}
            </Button>
          </div>
        </Form>
        {showModal && (
          <NoNewClientsModal
            showModal={showModal}
            onClose={() => {
              setState({ showModal: false });
            }}
          />
        )}
        {showApprovalModal && requiresApproval && (
          <AppointmentBookingModal
            body={messages.directBookingModalBody}
            showModal={showApprovalModal && requiresApproval}
            onClose={() => {
              setState({ showApprovalModal: false });
            }}
          />
        )}
        {showApprovalModal && !requiresApproval && (
          <AppointmentBookingModal
            body={messages.manualBookingModalBody}
            showModal={showApprovalModal && !requiresApproval}
            onClose={() => {
              setState({ showApprovalModal: false });
            }}
          />
        )}
      </div>
    </div>
  );
};

BookAnAppointmentForm.propTypes = {
  doesLawyerAcceptNewClients: bool,
  doesLawyerOfferPhoneAndVisitingAppointments: bool,
  requiresShortSummary: bool,
  doesTheFirmHaveOnlyOneLawyer: bool,
  requiresApproval: bool,
};

BookAnAppointmentForm.defaultProps = {
  doesLawyerAcceptNewClients: false,
  doesLawyerOfferPhoneAndVisitingAppointments: true,
  requiresShortSummary: true,
  doesTheFirmHaveOnlyOneLawyer: false,
  requiresApproval: false,
};

export default BookAnAppointmentForm;
