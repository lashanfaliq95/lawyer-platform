import React, { useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';
import styled, { css } from 'styled-components';
import { useSetState } from 'react-use';

import intl from 'helpers/intlHelper';
import {
  Header,
  HeaderExitButton,
  HeaderTitle,
  ModalFooter,
  ModalFooterButton,
  FormContainer,
  ModalFooterSeparator,
} from 'components/Shared';

import avatar from 'assets/images/avatar.png';
import cover from 'assets/images/cover-default.png';

const messages = defineMessages({
  addBackgroundImageTitle: {
    id:
      'app.publicProfilePage.coverSection.profileImageModal.addBackgroundImageTitle',
    defaultMessage: 'Update background image',
  },
  addImageTitle: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.addImageTitle',
    defaultMessage: 'Update your profile image',
  },
  addBackgroundImageSubTitle: {
    id:
      'app.publicProfilePage.coverSection.profileImageModal.addBackgroundImageSubTitle',
    defaultMessage: 'The first impression counts!',
  },
  addImageSubTitle: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.addImageSubTitle',
    defaultMessage: 'Professional images are not necessary!',
  },
  addImageDescription: {
    id:
      'app.publicProfilePage.coverSection.profileImageModal.addImageDescription',
    defaultMessage:
      'Upload your serious and authentic image. And do not forget to say cheese!',
  },
  editImageTitle: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.editImageTitle',
    defaultMessage: 'Edit your profile image',
  },
  editImageDescription: {
    id:
      'app.publicProfilePage.coverSection.profileImageModal.editImageDescription',
    defaultMessage: 'Drag the position of the image',
  },
  uploadImage: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.uploadImage',
    defaultMessage: 'Upload image',
  },
  changeImage: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.changeImage',
    defaultMessage: 'Change image',
  },
  saveImage: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.saveImage',
    defaultMessage: 'Save image',
  },
  imageSaved: {
    id: 'app.publicProfilePage.coverSection.profileImageModal.imageSaved',
    defaultMessage: 'Image saved',
  },
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;

  ${({ hasImage }) =>
    hasImage
      ? css`
          background-color: #000000;
        `
      : css`
          background-color: #ffffff;
        `}
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const Description = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 2rem;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;

  ${({ isCoverImage }) =>
    isCoverImage
      ? css`
          width: 100%;
          height: auto;
        `
      : css`
          height: 200px;
          width: 200px;
          border-radius: 25rem;
        `}}
`;

const Image = styled.img`
  width: 100%;
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputButton = styled(ModalFooterButton)`
  margin-bottom: 0px;
`;

function ImageModal({
  onToggle,
  onSubmit,
  image: previousImage,
  isCoverImage,
}) {
  const [
    { image, preview, isImageUploadSuccess, isImageUploadLoading },
    setState,
  ] = useSetState({
    image: previousImage,
    preview: previousImage || null,
    isImageUploadLoading: false,
    isImageUploadSuccess: false,
  });

  function onImageSelect({
    target: {
      files: [value],
    },
  }) {
    setState({
      image: value,
      preview: URL.createObjectURL(value),
    });
  }

  useEffect(() => {
    if (isImageUploadSuccess) {
      setTimeout(() => {
        onSubmit();
        onToggle();
      }, 3000);
    }
    //  eslint-disable-next-line
  }, [isImageUploadSuccess]);

  function handleOnSubmit() {
    setState({ isImageUploadSuccess: true });
    //  TODO API call to upload image here,
  }

  return (
    <FormContainer>
      <Header>
        <HeaderTitle>
          {(() => {
            if (isCoverImage) {
              return intl.formatMessage(
                image
                  ? messages.editImageTitle
                  : messages.addBackgroundImageTitle,
              );
            }
            return intl.formatMessage(
              image ? messages.editImageTitle : messages.addImageTitle,
            );
          })()}
        </HeaderTitle>
        <HeaderExitButton onClick={onToggle} right>
          <FaTimes />
        </HeaderExitButton>
      </Header>
      {(() => {
        return image ? (
          <>
            <Container hasImage>
              <ImageContainer>
                <ImagePreviewContainer isCoverImage={isCoverImage}>
                  <Image
                    src={preview}
                    alt={isCoverImage ? 'cover' : 'avatar'}
                  />
                </ImagePreviewContainer>
              </ImageContainer>
            </Container>
            <ModalFooter>
              <FileInputButton
                secondary
                as='label'
                for={
                  !isImageUploadSuccess &&
                  !isImageUploadLoading &&
                  'file-upload'
                }
              >
                {intl.formatMessage(messages.changeImage)}
              </FileInputButton>
              <FileInput
                id='file-upload'
                type='file'
                accept='image/*'
                onChange={onImageSelect}
              />
              <ModalFooterSeparator />
              <ModalFooterButton
                disabled={isImageUploadSuccess || isImageUploadLoading}
                onClick={handleOnSubmit}
              >
                {isImageUploadSuccess && <FaCheck size={15} color='#ffffff' />}
                {intl.formatMessage(
                  isImageUploadSuccess
                    ? messages.imageSaved
                    : messages.saveImage,
                )}
              </ModalFooterButton>
            </ModalFooter>
          </>
        ) : (
          <>
            <Container>
              <SubTitle>
                {intl.formatMessage(
                  isCoverImage
                    ? messages.addBackgroundImageSubTitle
                    : messages.addImageSubTitle,
                )}
              </SubTitle>
              <ImageContainer>
                <ImagePreviewContainer isCoverImage={isCoverImage}>
                  <Image
                    src={isCoverImage ? cover : avatar}
                    alt={isCoverImage ? 'cover' : 'avatar'}
                  />
                </ImagePreviewContainer>
              </ImageContainer>
              <Description>
                {intl.formatMessage(messages.addImageDescription)}
              </Description>
            </Container>
            <ModalFooter>
              <FileInputButton as='label' for='file-upload'>
                {intl.formatMessage(messages.uploadImage)}
              </FileInputButton>
              <FileInput
                id='file-upload'
                type='file'
                accept='image/*'
                onChange={onImageSelect}
              />
            </ModalFooter>
          </>
        );
      })()}
    </FormContainer>
  );
}

ImageModal.propTypes = {
  image: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isCoverImage: PropTypes.bool,
};

ImageModal.defaultProps = {
  image: null,
  isCoverImage: false,
};

export default ImageModal;
