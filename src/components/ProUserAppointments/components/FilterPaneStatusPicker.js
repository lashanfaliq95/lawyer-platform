import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { usePrevious, useSetState } from 'react-use';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { defineMessages } from 'react-intl';

import intl from 'helpers/intlHelper';
import { APPOINTMENT_TYPES } from 'components/Shared/constants';

const messages = defineMessages({
  inquiries: {
    id: 'app.proUserAppointments.filterPaneStatusPicker.inquiries',
    defaultMessage: 'Inquiries',
  },
  upcoming: {
    id: 'app.proUserAppointments.filterPaneStatusPicker.upcoming',
    defaultMessage: 'Upcoming',
  },
  cancelled: {
    id: 'app.proUserAppointments.filterPaneStatusPicker.cancelled',
    defaultMessage: 'Cancelled',
  },
  past: {
    id: 'app.proUserAppointments.filterPaneStatusPicker.past',
    defaultMessage: 'Past',
  },
  save: {
    id: 'app.proUserAppointments.filterPaneStatusPicker.save',
    defaultMessage: 'Save',
  },
  clear: {
    id: 'app.proUserAppointments.filterPaneStatusPicker.clear',
    defaultMessage: 'Clear',
  },
});

const SelectItemContainer = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  font-size: 0.9rem;
`;

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  border-radius: 5px;
  min-width: 250px;

  ${SelectItemContainer}:not(:first-child) {
    border-top: 1px solid #d2d2d2;
  }
`;

const SelectItemCheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid #d2d2d2;
  border-radius: 5px;
  margin-right: 1rem;

  ${({ checked }) =>
    checked &&
    css`
      background-color: #0061c0;
      border-color: #0061c0;
    `}
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const Separator = styled.div`
  width: 10px;
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  flex: 1;

  &:focus {
    outline: none;
  }

  ${({ primary }) => {
    return primary
      ? css`
          background-color: #0061c0;
          color: #ffffff;
        `
      : css`
          color: #0061c0;
        `;
  }}
`;

function FilterPaneStatusPicker({
  selectedTypes,
  isOpen,
  onFilterTypeChange,
  toggleIsOpen,
}) {
  const OPTIONS = [
    {
      label: intl.formatMessage(messages.inquiries),
      value: APPOINTMENT_TYPES.INQUIRIES,
    },
    {
      label: intl.formatMessage(messages.upcoming),
      value: APPOINTMENT_TYPES.UPCOMING,
    },
    {
      label: intl.formatMessage(messages.cancelled),
      value: APPOINTMENT_TYPES.CANCELLED,
    },
    {
      label: intl.formatMessage(messages.past),
      value: APPOINTMENT_TYPES.PAST,
    },
  ];

  const [{ selectedOptions }, setState] = useSetState({
    selectedOptions: [...OPTIONS],
  });
  const wasOpen = usePrevious(isOpen);

  function handleOnFilterReset() {
    setState({ selectedOptions: selectedTypes });
    toggleIsOpen();
  }

  function handleOnFilterChange() {
    onFilterTypeChange(selectedOptions);
    toggleIsOpen();
  }

  useEffect(() => {
    onFilterTypeChange(selectedOptions);
    //  eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (wasOpen && !isOpen) {
      setState({ selectedOptions: selectedTypes });
    }
    //  eslint-disable-next-line
  }, [isOpen]);

  return (
    <Container>
      {OPTIONS.map((item) => {
        const { label, value } = item;
        const checked = selectedOptions.find(
          ({ value: selectedValue }) => selectedValue === value,
        );

        function handleOnCheck() {
          let arr;
          if (checked) {
            arr = selectedOptions.filter(
              ({ value: selectedValue }) => selectedValue !== value,
            );
          } else {
            arr = [...selectedOptions, item];
          }
          setState({ selectedOptions: arr });
        }

        return (
          <SelectItemContainer key={value}>
            <SelectItemCheckBoxContainer
              checked={checked}
              onClick={handleOnCheck}
            >
              <FaCheck color='#FFFFFF' size={10} />
            </SelectItemCheckBoxContainer>
            {label}
          </SelectItemContainer>
        );
      })}
      <ButtonContainer>
        <Button onClick={handleOnFilterReset}>
          {intl.formatMessage(messages.clear)}
        </Button>
        <Separator />
        <Button primary onClick={handleOnFilterChange}>
          {intl.formatMessage(messages.save)}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

FilterPaneStatusPicker.propTypes = {
  selectedTypes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isOpen: PropTypes.bool,
  onFilterTypeChange: PropTypes.func.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
};

FilterPaneStatusPicker.defaultProps = {
  isOpen: false,
};

export default FilterPaneStatusPicker;
