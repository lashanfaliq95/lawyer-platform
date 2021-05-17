import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import { IoRemove, IoAdd } from 'react-icons/io5';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  height: 32px;
  padding: 0px 20px;

  & span {
    flex: 1;
    padding-left: ${({ titleIcon }) => (titleIcon ? '12px' : '')};
    text-align: left;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #eee;
  }

  &:focus {
    outline: none;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 4px 20px;
`;

function AccordionItem({ titleIcon, label, content }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button type='button' onClick={toggle} titleIcon={!!titleIcon}>
        {titleIcon}
        <span>{label}</span>
        {isOpen ? <IoRemove size={20} /> : <IoAdd size={20} />}
      </Button>
      <Collapse isOpen={isOpen}>
        <List>
          {content.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={index}>{item}</ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

AccordionItem.propTypes = {
  titleIcon: PropTypes.element,
  label: PropTypes.shape({}).isRequired,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
};

AccordionItem.defaultProps = {
  titleIcon: null,
};

export default AccordionItem;
