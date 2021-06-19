import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SelectOptionType } from 'components/Shared/propTypes';
import { defineMessages } from 'react-intl';
import { BsPencil } from 'react-icons/bs';
import { useSetState } from 'react-use';

import intl from 'helpers/intlHelper';
import { StyledModal, StyledModalBody } from 'components/Shared';
import PersonalInformationModal from './PersonalInformationModal';
import ImageModal from './ImageModal';

const messages = defineMessages({
  for: {
    id: 'app.publicProfilePage.coverSection.for',
    defaultMessage: 'for',
  },
});

const Container = styled.div`
  display: flex;
  border: 1px solid #d2d2d2;
  flex-direction: column;
`;

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

const NameContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const DescriptionContainer = styled.div`
  color: #636363;
  margin-top: 1rem;
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  right: 2rem;
  border: none;
  background: none;
  margin-left: auto;
  width: 40px;
  height: 40px;
  border-radius: 5rem;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: #d2d2d2;
  }
`;

const EDIT_TYPE = {
  EDIT_PROFILE: 'EDIT_PROFILE',
  EDIT_PROFILE_IMAGE: 'EDIT_PROFILE_IMAGE',
  EDIT_COVER_IMAGE: 'EDIT_COVER_IMAGE',
};

function CoverSection({ values }) {
  const {
    firstName,
    lastName,
    profileImageUrl,
    profileCoverPhotoUrl,
    jobTitle,
    legalSpecialization,
    nameOfLawFirm,
  } = values;

  const [{ editType }, setState] = useSetState({
    editType: EDIT_TYPE.EDIT_COVER_IMAGE,
  });

  function getCoverDescription() {
    return `${jobTitle.label} ${intl.formatMessage(
      messages.for,
    )} ${legalSpecialization.map(({ label }) => label).join(', ')}`;
  }

  function handleOnEditProfileClick() {
    setState({
      editType: EDIT_TYPE.EDIT_PROFILE,
    });
  }

  function handleOnEditProfileImageClick() {
    setState({
      editType: EDIT_TYPE.EDIT_PROFILE_IMAGE,
    });
  }

  function handleOnEditProfileCoverImageClick() {
    setState({
      editType: EDIT_TYPE.EDIT_COVER_IMAGE,
    });
  }

  function handleOnModalToggle() {
    setState({
      editType: null,
    });
  }

  function handleOnFormSubmit() {}

  return (
    <Container>
      <CoverImageContainer>
        <CoverImage src={profileCoverPhotoUrl} alt='Cover' />
      </CoverImageContainer>
      <DetailsContainer>
        <Button onClick={handleOnEditProfileClick}>
          <BsPencil size={20} color='#006ea9' />
        </Button>
        <ProfileImageRootContainer>
          <ProfileImageContainer>
            <ProfileImage src={profileImageUrl} alt='Profile' />
          </ProfileImageContainer>
        </ProfileImageRootContainer>
        <NameContainer>{`${firstName} ${lastName}`}</NameContainer>
        <DescriptionContainer>{getCoverDescription()}</DescriptionContainer>
        <NameContainer>{nameOfLawFirm}</NameContainer>
      </DetailsContainer>
      <StyledModal
        isOpen={editType}
        toggle={handleOnModalToggle}
        backdrop='static'
        centered
        size='lg'
      >
        <StyledModalBody>
          {(() => {
            switch (editType) {
              case EDIT_TYPE.EDIT_PROFILE:
                return (
                  <PersonalInformationModal
                    values={values}
                    onProfileImageToggle={handleOnEditProfileImageClick}
                    onProfileCoverImageToggle={
                      handleOnEditProfileCoverImageClick
                    }
                    onToggle={handleOnModalToggle}
                    onSubmit={handleOnFormSubmit}
                  />
                );
              case EDIT_TYPE.EDIT_PROFILE_IMAGE:
              case EDIT_TYPE.EDIT_COVER_IMAGE:
                return (
                  <ImageModal
                    image={
                      editType === EDIT_TYPE.EDIT_COVER_IMAGE
                        ? profileCoverPhotoUrl
                        : profileImageUrl
                    }
                    onToggle={handleOnModalToggle}
                    onSubmit={handleOnFormSubmit}
                    isCoverImage={editType === EDIT_TYPE.EDIT_COVER_IMAGE}
                  />
                );
              default:
                return null;
            }
          })()}
        </StyledModalBody>
      </StyledModal>
    </Container>
  );
}

CoverSection.propTypes = {
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
};

export default CoverSection;
