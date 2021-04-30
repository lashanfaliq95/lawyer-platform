import React from 'react';
import { shape, string } from 'prop-types';
import { ListGroup } from 'reactstrap';

import formatMessages from 'components/formatMessages';
import ListElement from './ListElement';
import { ListTitle, ListWrapper } from '../styles';

const ListSection = ({ title, list }) => (
  <ListWrapper>
    <ListTitle>{formatMessages(title)}</ListTitle>
    <ListGroup>
      {
        list && list.length !== 0 && list.map((element) => (
          <ListElement
            description={element.description}
            subDescription={element.subDescription}
            prefixIconName={element.prefixIconName}
            suffixIconName={element.suffixIconName}
            redirectUrl={element.redirectUrl}
          />
        ))
        }
    </ListGroup>
  </ListWrapper>
);

ListSection.propTypes = {
  title: string.isRequired,
  list: shape([]).isRequired,
};

export default ListSection;
