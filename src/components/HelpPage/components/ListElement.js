import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import formatMessages from 'components/formatMessages';
import Icon from 'components/Shared/Icon';

import { ListItem, ListItemDescription } from '../styles';

const ListElement = ({
  prefixIconName, description, subDescription, suffixIconName, redirectUrl,
}) => (
  <ListItem>
    <Link to={redirectUrl}>
      {prefixIconName && <Icon name={prefixIconName} />}
      <ListItemDescription>
        {formatMessages(description)}
      </ListItemDescription>
      {suffixIconName && <Icon name={suffixIconName} />}
      {subDescription
      && <span style={{ display: 'flex' }}>{formatMessages(subDescription)}</span>}
    </Link>
  </ListItem>
);

ListElement.propTypes = {
  description: string.isRequired,
  redirectUrl: string.isRequired,
  prefixIconName: string,
  suffixIconName: string,
  subDescription: string,
};

ListElement.defaultProps = {
  prefixIconName: null,
  suffixIconName: null,
  subDescription: null,
};

export default ListElement;
