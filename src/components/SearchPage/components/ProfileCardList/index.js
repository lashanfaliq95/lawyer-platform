import React, { useState, useEffect } from 'react';
import { Events } from 'react-scroll';
import { arrayOf } from 'prop-types';

import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import ProfileCard from '../ProfileCard';

const ProfileCardList = ({ users }) => {
  const [previousScrolledElement, setPreviousScrolledElement] = useState(null);
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      if (previousScrolledElement) {
        previousScrolledElement.classList.remove('active-card');
      }
    });

    Events.scrollEvent.register('end', (to, element) => {
      if (element) {
        setPreviousScrolledElement(element);
        element.classList.add('active-card');
      }
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  });

  return (
    <div className="list-group">
      {users.map((user) => (
        <>
          <ProfileCard
            id={user.id}
            name={user.name}
            jobDescription={user.jobDescription}
            address={user.address}
          />
          <HorizontalSeparator color="#EBEBEB" height={1} isContainer />
        </>
      ))}
    </div>

  );
};

ProfileCardList.propTypes = {
  users: arrayOf().isRequired,
};

export default ProfileCardList;
