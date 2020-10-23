import { arrayOf } from 'prop-types';
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import ProfileCard from '../ProfileCard';

const ProfileCardList = ({ users }) => (
  <ListGroup>
    {users.map((user) => (
      <ListGroupItem>
        <ProfileCard
          id={user.id}
          name={user.name}
          jobDescription={user.jobDescription}
          address={user.address}
        />
      </ListGroupItem>
    ))}
  </ListGroup>
);

ProfileCardList.propTypes = {
  users: arrayOf().isRequired,
};

export default ProfileCardList;
