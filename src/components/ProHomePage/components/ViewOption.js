import React, { useState } from 'react';
import styled from 'styled-components';
import { BiNotepad } from 'react-icons/bi';
import {
  IoChatboxOutline,
  IoLocationOutline,
  IoPersonSharp,
} from 'react-icons/io5';

import formatMessages from 'components/formatMessages';
import CheckboxLtr from '../../Shared/CheckBox/CheckboxLtr';
import Accordion from '../../Shared/Accordion';
import messages from '../messages';

const Title = styled.span`
  display: block;
  font-size: 1.3rem;
  padding: 8px 20px;
`;

function ViewOption() {
  const [isChecked, setIsChecked] = useState(true);

  function setIsCheckedHandler() {
    setIsChecked(!isChecked);
  }

  const accordionItems = [
    {
      id: 1,
      title: formatMessages(messages.viewOptionsLegalIssues),
      titleIcon: <BiNotepad size={20} />,
      content: [
        <CheckboxLtr
          checked={isChecked}
          label='Scheidung'
          onClick={setIsCheckedHandler}
        />,
        <CheckboxLtr
          checked={isChecked}
          label='Inkasso'
          onClick={setIsCheckedHandler}
        />,
        <CheckboxLtr
          checked={isChecked}
          label='Erinnerungen'
          onClick={setIsCheckedHandler}
        />,
        <CheckboxLtr
          checked={isChecked}
          label='Geburtstage'
          onClick={setIsCheckedHandler}
        />,
        <CheckboxLtr
          checked={isChecked}
          label='Tasks'
          onClick={setIsCheckedHandler}
        />,
      ],
    },
    {
      id: 2,
      title: formatMessages(messages.viewOptionsTypeOfAppointment),
      titleIcon: <IoChatboxOutline size={20} />,
      content: [
        <CheckboxLtr
          checked={isChecked}
          label='Personal Visit'
          onClick={setIsCheckedHandler}
        />,
        <CheckboxLtr
          checked={isChecked}
          label='Phone Appointment'
          onClick={setIsCheckedHandler}
        />,
      ],
    },
    {
      id: 3,
      title: formatMessages(messages.viewOptionsExpert),
      titleIcon: <IoPersonSharp size={20} />,
      content: [],
    },
    {
      id: 4,
      title: formatMessages(messages.viewOptionsLocation),
      titleIcon: <IoLocationOutline size={20} />,
      content: [],
    },
  ];

  return (
    <>
      <Title>{formatMessages(messages.viewOptionsTitle)}</Title>
      <Accordion items={accordionItems} />
    </>
  );
}

export default ViewOption;
