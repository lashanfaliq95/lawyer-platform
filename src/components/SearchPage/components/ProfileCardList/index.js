import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import ProfileCard from '../ProfileCard';

const ProfileCardList = () => (
  <ListGroup>
    <ListGroupItem><ProfileCard /></ListGroupItem>
    <ListGroupItem><ProfileCard /></ListGroupItem>
    <ListGroupItem><ProfileCard /></ListGroupItem>
    <ListGroupItem><ProfileCard /></ListGroupItem>
    <ListGroupItem><ProfileCard /></ListGroupItem>
    <ListGroupItem><ProfileCard /></ListGroupItem>
  </ListGroup>
);

export default ProfileCardList;
