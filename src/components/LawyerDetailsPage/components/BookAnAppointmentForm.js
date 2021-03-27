import React, { useState } from 'react';
import { bool } from 'prop-types';
import {
  Form, FormGroup, Button, Input, Label,
} from 'reactstrap';

import formatMessage from 'components/formatMessages';
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
  const [isClientWithoutInsurance, setIsClientWithoutInsurance] = useState(false);
  const [isAppointmentViaPhone, setIsAppointmentViaPhone] = useState(false);
  const [isPersonnelAppointment, setIsPersonnelAppointment] = useState(false);

  console.log('ss', isNotExistingClient, isExitingClient);
  const onClickNotAExistingClient = () => {
    if (!doesLawyerAcceptNewClients) {
      setShowModal(true);
    }
  };

  return (
    <div className="booking-section">
      {formatMessage(messages.bookAppointmentInTwoMinutes)}
      <Form>
        <div className={`form-section ${isNotExistingClient || isExitingClient ? 'active' : ''}`}>
          {formatMessage(messages.areYouAlreadyAClient)}
          <FormGroup check>
            <div className="check-box">
              <Label check onChange={onClickNotAExistingClient}>
                <Input
                  type="radio"
                  name="existingClient"
                  checked={isNotExistingClient}
                  onClick={() => {
                    setIsNotExitingClient(!isNotExistingClient);
                    setIsExitingClient(false);
                  }}
                />
                {formatMessage(messages.no)}
              </Label>
            </div>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="existingClient"
                checked={isExitingClient}
                onClick={() => {
                  setIsExitingClient(!isExitingClient);
                  setIsNotExitingClient(false);
                }}
              />
              {formatMessage(messages.iAmAlreadyAClient)}
            </Label>
          </FormGroup>
        </div>
        <div className={`form-section ${typeOfLegalIssue !== '' ? 'active' : ''}`}>
          <FormGroup>
            {formatMessage(messages.whatTypeOfLegalIssueIsIt)}
            <Input placeholder="Angelegenheit" value={typeOfLegalIssue} onChange={(e) => setTypeOfLegalIssue(e.target.value)} />
          </FormGroup>
        </div>
        <div className={`form-section ${isClientWithInsurance || isClientWithoutInsurance ? 'active' : ''}`}>
          {formatMessage(messages.doYouHaveLegalInsurance)}
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="legalInsurance"
                checked={isClientWithoutInsurance}
                onClick={() => {
                  setIsClientWithoutInsurance(true);
                  setIsClientWithInsurance(false);
                }}
              />
              {formatMessage(messages.no)}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="legalInsurance"
                checked={isClientWithInsurance}
                onClick={() => {
                  setIsClientWithoutInsurance(false);
                  setIsClientWithInsurance(true);
                }}
              />
              {formatMessage(messages.yesIHaveLegalInsurance)}
            </Label>
          </FormGroup>
        </div>
        {doesLawyerOfferPhoneAndVisitingAppointments && (
          <div className={`form-section ${isPersonnelAppointment || isAppointmentViaPhone ? 'active' : ''}`}>
            {formatMessage(messages.selectTypeOfAppointment)}
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="appointmentType"
                  checked={isAppointmentViaPhone}
                  onClick={() => {
                    setIsAppointmentViaPhone(true);
                    setIsPersonnelAppointment(false);
                  }}
                />
                {formatMessage(messages.appointmentViaPhone)}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="appointmentType"
                  checked={isPersonnelAppointment}
                  onClick={() => {
                    setIsAppointmentViaPhone(false);
                    setIsPersonnelAppointment(true);
                  }}
                />
                {formatMessage(messages.personnelAppointments)}
              </Label>
            </FormGroup>
          </div>
        )}
        {!doesTheFirmHaveOnlyOneLawyer && (
          <div className="form-section">
            <FormGroup>
              {formatMessage(messages.whichExpertShouldAdviceYou)}
              <Input placeholder="Experte" type="select">
                <option>Experte</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </div>
        )}
        {requiresShortSummary && (
          <div className="form-section">
            <FormGroup>
              {formatMessage(messages.summaryOfLegalIssue)}
              <Input placeholder="Ihr Text" type="textarea" />
            </FormGroup>
          </div>
        )}
        <Button className="login-btn" type="submit" color="primary">
          {formatMessage(messages.bookTheAppointment)}
        </Button>
      </Form>
      {showModal && <NoNewClientsModal showModal={showModal} />}
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
