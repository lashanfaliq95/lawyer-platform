import React from 'react';
import { MdPerson } from 'react-icons/md';
import { BsChevronRight } from 'react-icons/bs';

import formatMessages from 'components/formatMessages';
import messages from '../messages';
import {
  Container,
  ManageSetting,
  IconContainer,
  SettingContent,
} from '../styles';

function Setting() {
  return (
    <Container>
      <h6>{formatMessages(messages.settingTitle)}</h6>
      <ManageSetting>
        <IconContainer>
          <MdPerson size={30} />
        </IconContainer>
        <SettingContent>
          <span className='title'>
            {formatMessages(messages.settingDeleteAccount)}
          </span>
          <span>{formatMessages(messages.settingDescription)}</span>
        </SettingContent>
        <IconContainer>
          <button type='button'>
            <BsChevronRight />
          </button>
        </IconContainer>
      </ManageSetting>
    </Container>
  );
}

export default Setting;
