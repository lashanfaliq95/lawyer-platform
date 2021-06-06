import React, { useState, useEffect } from 'react';
import { func, number } from 'prop-types';
import './styles.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationComponent = (props) => {
  const { action, noOfPages, maxShownPages } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSection, setCurrentPageSection] = useState(1);
  const paginationItems = [];

  useEffect(() => {
    if (
      currentPage < currentPageSection ||
      currentPage >= currentPageSection + maxShownPages - 1
    ) {
      setCurrentPageSection(currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  for (
    let i = currentPageSection;
    i < currentPageSection + maxShownPages;
    i += 1
  ) {
    if (i <= noOfPages) {
      paginationItems.push(
        <PaginationItem active={currentPage === i}>
          <PaginationLink
            onClick={() => {
              setCurrentPage(i);
              action(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }
  }
  return (
    <Pagination size='md' aria-label='Page navigation'>
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          previous
          onClick={() => {
            setCurrentPage(currentPage - 1);
            action(currentPage - 1);
          }}
        />
      </PaginationItem>
      {paginationItems.length > 0 && paginationItems}
      <PaginationItem disabled={currentPage === noOfPages}>
        <PaginationLink
          next
          onClick={() => {
            setCurrentPage(currentPage + 1);
            action(currentPage + 1);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
};

PaginationComponent.propTypes = {
  action: func,
  noOfPages: number,
  maxShownPages: number,
};

PaginationComponent.defaultProps = {
  action: () => {},
  noOfPages: 0,
  maxShownPages: 5,
};

export default PaginationComponent;
