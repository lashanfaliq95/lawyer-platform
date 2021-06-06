/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { string } from 'prop-types';
import { useSetState } from 'react-use';
import { IoCheckmark } from 'react-icons/io5';

import formatMessages from 'components/formatMessages';
import messages from '../messages';
import SelectInput from './SelectInput';
import { Button, ButtonContainer, Container, FurtherInfo } from '../styles';

// dummy gender list
const GENDERS = [
  {
    value: 'female',
    label: 'Weiblich',
  },
  {
    value: 'male',
    label: 'Männlich',
  },
];

// dummy job title list, must be set according to the selected gender
const JOB_TITLES = [
  {
    value: 'specialize_lawyer',
    label: 'Fachanwalt',
  },
  {
    value: 'general_lawyer',
    label: 'Rechtsanwalt',
  },
  {
    value: 'patent_lawyer',
    label: 'Patentanwalt',
  },
  {
    value: 'notary',
    label: 'Notar',
  },
  {
    value: 'tax_consultant',
    label: 'Steuerberater',
  },
  {
    value: 'consultant',
    label: 'Berater',
  },
];

function FurtherInformation({ gender, jobTitle }) {
  const [
    { selectedGender, selectedJobTitle, submitted },
    setState,
  ] = useSetState({
    selectedGender: gender,
    selectedJobTitle: jobTitle,
    submitted: false,
  });

  function handleOnSelect(name, value) {
    if (name === 'gender') {
      setState({
        selectedGender: value,
      });
    }

    if (name === 'jobTitle') {
      setState({
        selectedJobTitle: value,
      });
    }
  }

  function handleSubmit() {
    setState((prevState) => ({ submitted: !prevState.submitted }));
  }

  return (
    <Container>
      <h6>{formatMessages(messages.furtherInfoTitle)}</h6>
      <FurtherInfo>
        <SelectInput
          name='gender'
          label={messages.furtherInfoGender}
          items={GENDERS}
          selected={selectedGender}
          onSelect={handleOnSelect}
        />
        <SelectInput
          name='jobTitle'
          label={messages.furtherInfoJobTitle}
          items={JOB_TITLES}
          selected={selectedJobTitle}
          onSelect={handleOnSelect}
        />
        <ButtonContainer className='pt-3 pr-3'>
          <Button type='button' onClick={handleSubmit} saved={submitted}>
            <div>
              {submitted && <IoCheckmark size={16} />}{' '}
              {formatMessages(
                submitted ? messages.btnChangesSaved : messages.btnSaveChanges,
              )}
            </div>
          </Button>
        </ButtonContainer>
      </FurtherInfo>
    </Container>
  );
}

FurtherInformation.propTypes = {
  gender: string,
  jobTitle: string,
};

FurtherInformation.defaultProps = {
  gender: '',
  jobTitle: '',
};

export default FurtherInformation;
