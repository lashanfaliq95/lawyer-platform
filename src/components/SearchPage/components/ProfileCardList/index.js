import React, { useState, useEffect, memo } from 'react';
import { Events } from 'react-scroll';
import { arrayOf, shape, func } from 'prop-types';

import HorizontalSeparator from 'components/Shared/HorizontalSeparator';
import Pagination from 'components/Shared/Pagination';
import ProfileCard from '../ProfileCard';

const ProfileCardList = ({ users, getSearchResult }) => {
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
    <div className='list-group'>
      {users.map((user) => (
        <div key={user.id}>
          <ProfileCard
            id={user.id}
            name={user.name}
            expertId={user.expertId}
            road={user.road}
            houseNumber={user.houseNumber}
            zipCode={user.zipCode}
            imageUrl={user.imageUrl}
            firm={user.firm}
            city={user.city}
            gender={user.gender}
          />
          <HorizontalSeparator color='#EBEBEB' height={1} isContainer />
        </div>
      ))}
      <div className='pagination-wrapper'>
        <Pagination
          noOfPages={6}
          action={(page) => getSearchResult({ page })}
        />
      </div>
    </div>
  );
};

ProfileCardList.propTypes = {
  users: arrayOf(shape({})).isRequired,
  getSearchResult: func.isRequired,
};

export default memo(ProfileCardList);
