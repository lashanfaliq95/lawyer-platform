import React, { useState } from 'react';
import { bool } from 'prop-types';
import { Form, FormGroup, Button, Input } from 'reactstrap';

import formatMessage from 'components/formatMessages';
import Calender from 'components/SearchPage/components/Calender';

import RadioInputWithTick from 'components/Shared/RadioInputWithTick';
import NoNewClientsModal from './NoNewClientsModal';
import messages from '../messages';

const BookAnAppointmentForm = ({
  doesLawyerAcceptNewClients,
  doesLawyerOfferPhoneAndVisitingAppointments,
  doesTheFirmHaveOnlyOneLawyer,
  requiresShortSummary,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isNotExistingClient, setIsNotExitingClient] = useState(false);
  const [isExitingClient, setIsExitingClient] = useState(false);
  const [typeOfLegalIssue, setTypeOfLegalIssue] = useState('');
  const [isClientWithInsurance, setIsClientWithInsurance] = useState(false);
  const [isClientWithoutInsurance, setIsClientWithoutInsurance] = useState(
    false,
  );
  const [isAppointmentViaPhone, setIsAppointmentViaPhone] = useState(false);
  const [isPersonnelAppointment, setIsPersonnelAppointment] = useState(false);
  const [expertOfLawFirm, setExpertOfLawFirm] = useState('');
  const [summaryOfIssue, setSummaryOfIssue] = useState('');

  const onClickNotAExistingClient = () => {
    if (!doesLawyerAcceptNewClients) {
      setShowModal(true);
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
                    setIsNotExitingClient(!isNotExistingClient);
                    setIsExitingClient(false);
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
                  setIsExitingClient(!isExitingClient);
                  setIsNotExitingClient(false);
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
                onChange={(e) => setTypeOfLegalIssue(e.target.value)}
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
                  setIsClientWithoutInsurance(true);
                  setIsClientWithInsurance(false);
                }}
                label={messages.no}
              />
            </FormGroup>
            <FormGroup check>
              <RadioInputWithTick
                name='legalInsurance'
                checked={isClientWithInsurance}
                onClick={() => {
                  setIsClientWithoutInsurance(false);
                  setIsClientWithInsurance(true);
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
                      setIsAppointmentViaPhone(true);
                      setIsPersonnelAppointment(false);
                    }}
                    label={messages.appointmentViaPhone}
                  />
                </FormGroup>
                <FormGroup check>
                  <RadioInputWithTick
                    name='appointmentType'
                    checked={isPersonnelAppointment}
                    onClick={() => {
                      setIsAppointmentViaPhone(false);
                      setIsPersonnelAppointment(true);
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
                    onChange={(e) => setExpertOfLawFirm(e.target.value)}
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
                      setSummaryOfIssue(e.target.value);
                    }}
                  />
                </FormGroup>
              </div>
            </>
          )}
          <div className='form-section calender-wrapper'>
            {formatMessage(messages.selectTimeSlot)}
            <Calender id='mock1' />
            <Button className='appointment-btn' type='submit' color='primary'>
              {formatMessage(messages.bookTheAppointment)}
            </Button>
          </div>
        </Form>
        {showModal && (
          <NoNewClientsModal
            showModal={showModal}
            onClose={() => {
              setShowModal(false);
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
};

BookAnAppointmentForm.defaultProps = {
  doesLawyerAcceptNewClients: false,
  doesLawyerOfferPhoneAndVisitingAppointments: true,
  requiresShortSummary: true,
  doesTheFirmHaveOnlyOneLawyer: false,
};

export default BookAnAppointmentForm;
