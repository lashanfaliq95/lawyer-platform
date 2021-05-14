import React from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { AppointmentPropType } from 'helpers/types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  display: block;
  font-size: 0.9rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ${({ right }) =>
    right &&
    css`
      flex-direction: row;
      cursor: pointer;
    `}

  ${Label}:nth-child(3) {
    margin-top: 1rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d2d2d2;
  border-radius: 10px;

  ${DetailItem}:not(:last-child) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

const SubTitle = styled.span`
  font-size: 1.2rem;
  margin: 1rem 0rem;
  display: block;
`;

const Value = styled.span`
  display: block;
`;

function DetailsPane({ appointment }) {
  const {
    user: { firstName, lastName },
    date,
  } = appointment;
  return (
    <Container>
      <SubTitle>Termindetails</SubTitle>
      <DetailsContainer>
        <DetailItem>
          <Label>Name</Label>
          <Value>{`${firstName} ${lastName}`}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Datum und Uhrzeit</Label>
          <Value>{`${moment(date).format('DD MMMM YYYY, HH:MM')}`}</Value>
        </DetailItem>
        <DetailItem>
          <Label>Angelegenheit</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>Details</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>Rechtsschutzversicherung</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>Mandantenstatus</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>Terminart</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>Standort</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>Experte</Label>
          <Value>Sample</Value>
        </DetailItem>
        <DetailItem>
          <Label>E-Mail</Label>
          <Value>Sample</Value>
          <Label>Handynummer</Label>
          <Value>Sample</Value>
        </DetailItem>
      </DetailsContainer>
    </Container>
  );
}

DetailsPane.propTypes = {
  appointment: AppointmentPropType.isRequired,
};

export default DetailsPane;
