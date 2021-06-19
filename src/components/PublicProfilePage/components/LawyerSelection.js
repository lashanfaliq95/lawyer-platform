import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { defineMessages } from 'react-intl';

import SingleSelect from 'components/Shared/SingleSelect/SingleSelect';
import Switch from 'components/Shared/Switch/Switch';
import intl from 'helpers/intlHelper';
import { SelectOptionType } from 'components/Shared/propTypes';

const messages = defineMessages({
  publishTheProfile: {
    id: 'app.publicProfilePage.lawyerSelection.publishTheProfile',
    defaultMessage: 'Publish the Profile',
  },
  selectPlaceholder: {
    id: 'app.singleSelect.selectPlaceholder',
    defaultMessage: 'Select',
  },
});

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PublishContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublishText = styled.span`
  margin-right: 1rem;
  font-size: 1.3rem;
`;

const Separator = styled.div`
  width: 1rem;
`;

const SelectButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: #006ea9;
  color: #ffffff;
  border-radius: 5px;
  font-size: 1.3rem;

  svg {
    margin-left: auto;
  }
`;

function LawyerSelection({
  options,
  onOptionSelect,
  selected,
  isProfilePublished,
  onProfilePublish,
}) {
  function handleRenderInput(option, onDropdownToggle, isToggled) {
    return (
      <SelectButton onClick={onDropdownToggle}>
        {option ? option.label : intl.formatMessage(messages.selectPlaceholder)}
        {isToggled ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
      </SelectButton>
    );
  }

  return (
    <Container>
      <ItemContainer>
        <SingleSelect
          options={options}
          onOptionSelect={onOptionSelect}
          selected={selected}
          renderInput={handleRenderInput}
        />
      </ItemContainer>
      <Separator />
      <PublishContainer>
        <PublishText>
          {intl.formatMessage(messages.publishTheProfile)}
        </PublishText>
        <Switch
          lg
          isSwitchedOn={isProfilePublished}
          onToggleSwitch={onProfilePublish}
          readOnly={isProfilePublished}
        />
      </PublishContainer>
    </Container>
  );
}

LawyerSelection.propTypes = {
  options: PropTypes.arrayOf(SelectOptionType),
  selected: SelectOptionType,
  onOptionSelect: PropTypes.func.isRequired,
  onProfilePublish: PropTypes.func.isRequired,
  isProfilePublished: PropTypes.bool.isRequired,
};

LawyerSelection.defaultProps = {
  options: [],
  selected: null,
};

export default LawyerSelection;
