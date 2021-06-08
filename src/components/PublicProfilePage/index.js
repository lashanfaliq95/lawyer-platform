import React from 'react';
import styled from 'styled-components';
import { useSetState } from 'react-use';

import { CLIENTS } from 'helpers/data';
import {
  MALE_JOB_TYPES,
  SPECIALIZATION_TYPES,
  TITLES,
} from 'components/Shared/options';
import { GENDER } from 'components/Shared/constants';
import ProAccountContainer from 'components/Shared/ProAccountContainer';
import LawyerSelection from './components/LawyerSelection';
import CoverSection from './components/CoverSection';
import InformationSection from './components/InformationSection';
import LegalAreasSection from './components/LegalAreasSection';
import LocationSection from './components/LocationSection';
import OpenHoursSection from './components/OpenHoursSection';

const Separator = styled.div`
  height: 2rem;
`;

const LAWYERS = CLIENTS.map(({ id, firstName, lastName }) => ({
  value: id,
  label: `${firstName} ${lastName}`,
}));

const profileImage =
  'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/avatar/avatar-7.png';
const coverPhoto = 'https://coverfiles.alphacoders.com/252/25211.jpg';

function PublicProfilePage() {
  const [
    {
      doesTheFirmHaveMultipleLawyers,
      doesTheFirmHaveMultipleLocations,
      selectedLawyer,
      isPublishSuccessful,
      initialFormValues: { coverSection },
    },
    setState,
  ] = useSetState({
    doesTheFirmHaveMultipleLawyers: true,
    doesTheFirmHaveMultipleLocations: false,
    selectedLawyer: LAWYERS[0],
    isPublishSuccessful: false,
    initialFormValues: {
      coverSection: {
        title: TITLES[0],
        firstName: CLIENTS[0].firstName,
        lastName: CLIENTS[0].lastName,
        gender: GENDER.MALE,
        jobTitle: MALE_JOB_TYPES[0],
        legalSpecialization: SPECIALIZATION_TYPES.slice(0, 2),
        nameOfLawFirm: 'Stark Industries',
        profileImageUrl: profileImage,
        profileCoverPhotoUrl: coverPhoto,
      },
    },
  });

  const lawyerOptions =
    doesTheFirmHaveMultipleLawyers || doesTheFirmHaveMultipleLocations
      ? [LAWYERS[0], { value: 'company', label: 'Sample Company' }]
      : [];

  function handleOnLawyerOptionSelect(option) {
    setState({ selectedLawyer: option });
  }

  function handleOnProfilePublish() {
    setState({ isPublishSuccessful: true });
  }

  return (
    <ProAccountContainer>
      <LawyerSelection
        options={lawyerOptions}
        selected={selectedLawyer}
        onOptionSelect={handleOnLawyerOptionSelect}
        isProfilePublished={isPublishSuccessful}
        onProfilePublish={handleOnProfilePublish}
      />
      <Separator />
      <CoverSection values={coverSection} />
      <Separator />
      <InformationSection />
      <Separator />
      <LegalAreasSection />
      <Separator />
      <LocationSection />
      <Separator />
      <OpenHoursSection />
    </ProAccountContainer>
  );
}

export default PublicProfilePage;
