import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';

import AccordionItem from './components/AccordionItem';

import styles from './styles.scss';

function AccordionComponent({ items }) {
  return (
    <Accordion className={styles.accordion}>
      {items.map(({ id, title, titleIcon, content }) => (
        <AccordionItem
          key={id}
          titleIcon={titleIcon}
          label={title}
          content={content}
        />
      ))}
    </Accordion>
  );
}

AccordionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.shape({}).isRequired,
      titleIcon: PropTypes.element,
      content: PropTypes.arrayOf(PropTypes.node).isRequired,
    }),
  ),
};

AccordionComponent.defaultProps = {
  items: [],
};

export default AccordionComponent;
