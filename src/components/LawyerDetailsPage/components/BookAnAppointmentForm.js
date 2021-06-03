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
      selectedDate,
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
    selectedDate: '',
  });

  const onClickNotAExistingClient = () => {
    if (!doesLawyerAcceptNewClients) {
      setState({ showModal: true });
    }
  };

  const isFirstThreeStepsCompleted =
    (isNotExistingClient || isExitingClient) &&
    typeOfLegalIssue &&
    (isClientWithInsurance || isClientWithoutInsurance);

  const shouldShowStepFour =
    doesLawyerOfferPhoneAndVisitingAppointments && isFirstThreeStepsCompleted;

  const shouldShowStepFive =
    !doesTheFirmHaveOnlyOneLawyer &&
    ((shouldShowStepFour &&
      (isPersonnelAppointment || isAppointmentViaPhone)) ||
      (!doesLawyerOfferPhoneAndVisitingAppointments &&
        isFirstThreeStepsCompleted));

  const shouldShowStepSix =
    requiresShortSummary &&
    ((shouldShowStepFive && expertOfLawFirm) ||
      (doesTheFirmHaveOnlyOneLawyer &&
        doesLawyerOfferPhoneAndVisitingAppointments &&
        (isPersonnelAppointment || isAppointmentViaPhone)) ||
      (doesTheFirmHaveOnlyOneLawyer &&
        !doesLawyerOfferPhoneAndVisitingAppointments &&
        isFirstThreeStepsCompleted));

  const shouldShowCalender =
    (shouldShowStepSix && summaryOfIssue) ||
    (!requiresShortSummary &&
      !doesTheFirmHaveOnlyOneLawyer &&
      expertOfLawFirm) ||
    (!requiresShortSummary &&
      doesTheFirmHaveOnlyOneLawyer &&
      doesLawyerOfferPhoneAndVisitingAppointments &&
      (isPersonnelAppointment || isAppointmentViaPhone)) ||
    (!requiresShortSummary &&
      doesTheFirmHaveOnlyOneLawyer &&
      !doesLawyerOfferPhoneAndVisitingAppointments &&
      isFirstThreeStepsCompleted);

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
            <span className='section-title'>
              {formatMessage(messages.areYouAlreadyAClient)}
            </span>
            <FormGroup check className='top-radio-input'>
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
            </FormGroup>
            <FormGroup check className='bottom-radio-button'>
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
              <span className='section-title'>
                {formatMessage(messages.whatTypeOfLegalIssueIsIt)}
              </span>
              <Input
                defaultValue=''
                type='select'
                onChange={(e) => {
                  setState({ typeOfLegalIssue: e.target.value });
                }}
              >
                <option hidden value=''>
                  Angelegenheit
                </option>
                <option value='Katja'>Katja</option>
                <option value='Dr. Rainer'>Dr. Rainer</option>
                <option value='Anne'>Anne</option>
                <option value='Jan Niklas'>Jan Niklas</option>
              </Input>
            </FormGroup>
          </div>

          <div
            className={`form-section ${
              isClientWithInsurance || isClientWithoutInsurance
                ? 'active-section'
                : ''
            }`}
          >
            <span className='section-title'>
              {formatMessage(messages.doYouHaveLegalInsurance)}
            </span>
            <FormGroup check className='top-radio-input'>
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
            <FormGroup check className='bottom-radio-button'>
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
                <span className='section-title'>
                  {formatMessage(messages.selectTypeOfAppointment)}
                </span>
                <FormGroup check className='top-radio-input'>
                  <RadioInputWithTick
                    className='top-radio-input'
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
                <FormGroup check className='bottom-radio-button'>
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
                  <span className='section-title'>
                    {formatMessage(messages.whichExpertShouldAdviceYou)}
                  </span>
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
                  <span className='section-title'>
                    {formatMessage(messages.summaryOfLegalIssue)}
                  </span>

                  <Input
                    placeholder='Ihr Text'
                    type='textarea'
                    onChange={(e) => {
                      setState({ summaryOfIssue: e.target.value });
                    }}
                    style={{ height: '200px' }}
                  />
                </FormGroup>
              </div>
            </>
          )}
          {shouldShowCalender && (
            <div
              className={`form-section calender-wrapper ${
                selectedDate ? 'active-section' : ''
              }`}
            >
              <span className='section-title'>
                {formatMessage(messages.selectTimeSlot)}
              </span>
              <Calender
                id='mock1'
                onClickValue={(value) => {
                  setState({ selectedDate: value });
                }}
              />
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
          )}
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
            selectedDate={selectedDate}
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
