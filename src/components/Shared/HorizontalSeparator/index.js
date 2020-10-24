import React from 'react';
import { Container } from 'reactstrap';
import { string, number, bool } from 'prop-types';
import './styles.scss';

const HorizontalSeparator = ({
  color, height, isContainer, className,
}) => (
  !isContainer ? (
    <hr
      style={{
        color,
        backgroundColor: color,
        height,
      }}
    />
  ) : (
    <Container className={className}>
      <hr
        style={{
          color,
          backgroundColor: color,
          height,
        }}
      />
    </Container>
  ));

HorizontalSeparator.propTypes = {
  color: string,
  height: number,
  isContainer: bool,
  className: string,
};

HorizontalSeparator.defaultProps = {
  color: 'black',
  height: 1,
  isContainer: false,
  className: '',
};

export default HorizontalSeparator;
