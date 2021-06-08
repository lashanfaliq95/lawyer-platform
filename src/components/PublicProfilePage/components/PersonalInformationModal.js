import React from 'react';
import * as Yup from 'yup';
import { FaTimes } from 'react-icons/fa';
import { useFormik } from 'formik';
import { AiFillCamera } from 'react-icons/ai';
import PropTypes from 'prop-types';

import intl from 'helpers/intlHelper';
import {
  Header,
  HeaderExitButton,
  HeaderTitle,
  ModalFooter,
  ModalFooterButton,
  FormContainer,
} from 'components/Shared';
import SmFormInput from 'components/ProHomePage/components/SmFormInput';
import SingleSelect from 'components/Shared/SingleSelect/SingleSelect';
import { GENDER } from 'components/Shared/constants';
import {
  FEMALE_JOB_TYPES,
  MALE_JOB_TYPES,
  SPECIALIZATION_TYPES,
  TITLES,
} from 'components/Shared/options';
import MultiSelect from 'components/Shared/MultiSelect/MultiSelect';
import { ValidationError } from 'components/ProHomePage/components';
import { defineMessages } from 'react-intl';
import styled, { css } from 'styled-components';
import { SelectOptionType } from 'components/Shared/propTypes';

const messages = defineMessages({
  identity: {
    id: 'app.publicProfilePage.coverSection.personalInformationModal.identity',
    defaultMessage: 'Identity',
  },
  title: {
    id: 'app.publicProfilePage.coverSection.personalInformationModal.title',
    defaultMessage: 'Title',
  },
  firstName: {
    id: 'app.publicProfilePage.coverSection.personalInformationModal.firstName',
    defaultMessage: 'First name',
  },
  lastName: {
    id: 'app.publicProfilePage.coverSection.personalInformationModal.lastName',
    defaultMessage: 'Last name',
  },
  jobTitle: {
    id: 'app.publicProfilePage.coverSection.personalInformationModal.jobTitle',
    defaultMessage: 'Job title',
  },
  specializations: {
    id:
      'app.publicProfilePage.coverSection.personalInformationModal.specializations',
    defaultMessage: 'Specializations',
  },
  nameOfTheFirm: {
    id:
      'app.publicProfilePage.coverSection.personalInformationModal.nameOfTheFirm',
    defaultMessage: 'Name of the firm',
  },
  save: {
    id: 'app.publicProfilePage.coverSection.personalInformationModal.save',
    defaultMessage: 'Save',
  },
  minLegalSpecialization: {
    id:
      'app.publicProfilePage.coverSection.personalInformationModal.minLegalSpecialization',
    defaultMessage: 'Please select atleast one legal specialization.',
  },
  maxLegalSpecialization: {
    id:
      'app.publicProfilePage.coverSection.personalInformationModal.maxLegalSpecialization',
    defaultMessage:
      'You can only select up to a maximum of 5 legal specializations.',
  },
  nameOfLawFirmRequired: {
    id:
      'app.publicProfilePage.coverSection.personalInformationModal.nameOfLawFirmRequired',
    defaultMessage: 'Name of the law firm is required.',
  },
});

const CoverImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 200px;
  position: relative;
`;

const CoverImage = styled.img`
  width: 100%;
`;

const ProfileImageRootContainer = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 5rem;
  margin-top: calc(-75px - 2rem - 3px);
  position: relative;
`;

const ProfileImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ffffff;
`;

const ProfileImageEditButton = styled.button`
  position: absolute;
  background-color: #ffffff;
  border: 2px solid #d2d2d2;
  height: 40px;
  width: 40px;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ coverPhotoEdit }) =>
    coverPhotoEdit
      ? css`
          right: 1rem;
          top: 1rem;
        `
      : css`
          top: calc(75% - 10px);
          left: calc(75% - 10px);
        `}
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
`;

const FormRowContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ flex }) =>
    flex
      ? css`
          flex: ${flex};
        `
      : css`
          flex: 1;
        `};
`;

const FormInputSeparator = styled.div`
  width: 2rem;
`;

const FormInputLabel = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

function PersonalInformationModal({
  values: {
    title,
    firstName,
    lastName,
    jobTitle,
    legalSpecialization,
    nameOfLawFirm,
    profileCoverPhotoUrl,
    profileImageUrl,
    gender,
  },
  onToggle,
  onSubmit,
  onProfileImageToggle,
  onProfileCoverImageToggle,
}) {
  //  eslint-disable-next-line
  function handleOnSubmit(values) {
    //  TODO API Call to update cover section here
    onSubmit();
    onToggle();
  }

  const {
    getFieldProps,
    errors,
    touched,
    values: {
      jobTitle: formJobTitle,
      title: formTitle,
      legalSpecialization: formLegalSpecialization,
    },
    setFieldValue,
    setFieldTouched,
    submitForm,
  } = useFormik({
    initialValues: {
      title,
      firstName,
      lastName,
      jobTitle,
      legalSpecialization,
      nameOfLawFirm,
    },
    validationSchema: Yup.object({
      legalSpecialization: Yup.array()
        .min(1, intl.formatMessage(messages.minLegalSpecialization))
        .max(5, intl.formatMessage(messages.maxLegalSpecialization)),
      nameOfLawFirm: Yup.string().required(
        intl.formatMessage(messages.nameOfLawFirmRequired),
      ),
    }),
    onSubmit: handleOnSubmit,
  });

  function getFieldPropsWithErrors(name) {
    return {
      ...getFieldProps(name),
      error: errors[name],
      touched: touched[name],
      lg: true,
      fontWeight: 400,
    };
  }

  function handleOnTitleSelect(option) {
    setFieldValue('title', option);
  }

  function handleOnJobTitleSelect(option) {
    setFieldValue('jobTitle', option);
  }

  function handleOnSpecializationSelect(options) {
    setFieldValue('legalSpecialization', options);
    if (!touched.legalSpecialization) {
      setFieldTouched('legalSpecialization', true, true);
    }
  }

  return (
    <FormContainer>
      <Header>
        <HeaderTitle>{intl.formatMessage(messages.identity)}</HeaderTitle>
        <HeaderExitButton onClick={onToggle} right>
          <FaTimes />
        </HeaderExitButton>
      </Header>
      <CoverImageContainer>
        <CoverImage src={profileCoverPhotoUrl} alt='Cover' />
        <ProfileImageEditButton
          coverPhotoEdit
          onClick={onProfileCoverImageToggle}
        >
          <AiFillCamera size={20} color='#006ea9' />
        </ProfileImageEditButton>
      </CoverImageContainer>
      <DetailsContainer>
        <ProfileImageRootContainer>
          <ProfileImageContainer>
            <ProfileImage src={profileImageUrl} alt='Profile' />
          </ProfileImageContainer>
          <ProfileImageEditButton onClick={onProfileImageToggle}>
            <AiFillCamera size={20} color='#006ea9' />
          </ProfileImageEditButton>
        </ProfileImageRootContainer>
        <FormRowContainer>
          <FormInputContainer>
            <FormInputLabel>
              {intl.formatMessage(messages.title)}
            </FormInputLabel>
            <SingleSelect
              isDefaultInputLg
              selected={formTitle}
              options={TITLES}
              onOptionSelect={handleOnTitleSelect}
            />
          </FormInputContainer>
          <FormInputSeparator />
          <FormInputContainer flex={3}>
            <FormInputLabel>
              {intl.formatMessage(messages.firstName)}
            </FormInputLabel>
            <SmFormInput
              lg
              {...getFieldPropsWithErrors('firstName')}
              readOnly
            />
          </FormInputContainer>
          <FormInputSeparator />
          <FormInputContainer flex={3}>
            <FormInputLabel>
              {intl.formatMessage(messages.lastName)}
            </FormInputLabel>
            <SmFormInput lg {...getFieldPropsWithErrors('lastName')} readOnly />
          </FormInputContainer>
        </FormRowContainer>
        <FormRowContainer>
          <FormInputContainer flex={2}>
            <FormInputLabel>
              {intl.formatMessage(messages.jobTitle)}
            </FormInputLabel>
            <SingleSelect
              isDefaultInputLg
              selected={formJobTitle}
              options={
                gender === GENDER.MALE ? MALE_JOB_TYPES : FEMALE_JOB_TYPES
              }
              onOptionSelect={handleOnJobTitleSelect}
            />
          </FormInputContainer>
          <FormInputSeparator />
          <FormInputContainer flex={3}>
            <FormInputLabel>
              {intl.formatMessage(messages.specializations)}
            </FormInputLabel>
            <MultiSelect
              isDefaultInputLg
              selected={formLegalSpecialization}
              options={SPECIALIZATION_TYPES}
              onOptionSelect={handleOnSpecializationSelect}
            />
            {errors.legalSpecialization && touched.legalSpecialization && (
              <ValidationError>{errors.legalSpecialization}</ValidationError>
            )}
          </FormInputContainer>
        </FormRowContainer>
        <FormRowContainer>
          <FormInputContainer>
            <FormInputLabel>
              {intl.formatMessage(messages.nameOfTheFirm)}
            </FormInputLabel>
            <SmFormInput {...getFieldPropsWithErrors('nameOfLawFirm')} />
          </FormInputContainer>
        </FormRowContainer>
      </DetailsContainer>
      <ModalFooter>
        <ModalFooterButton onClick={submitForm}>
          {intl.formatMessage(messages.save)}
        </ModalFooterButton>
      </ModalFooter>
    </FormContainer>
  );
}

PersonalInformationModal.propTypes = {
  values: PropTypes.shape({
    title: SelectOptionType.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    jobTitle: SelectOptionType.isRequired,
    legalSpecialization: PropTypes.arrayOf(SelectOptionType),
    nameOfLawFirm: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string,
    profileCoverPhotoUrl: PropTypes.string,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onProfileImageToggle: PropTypes.func.isRequired,
  onProfileCoverImageToggle: PropTypes.func.isRequired,
};

export default PersonalInformationModal;
