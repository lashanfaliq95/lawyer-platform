import React from 'react';
import { bool, string } from 'prop-types';
import { Spinner } from 'reactstrap';

import './styles.scss';

const Loader = ({ isLoading, className }) => isLoading && (
<div className={className}>
  <div className='loader'>
    <Spinner type='grow' color='info' />
    <Spinner type='grow' color='info' />
    <Spinner type='grow' color='info' />
    <Spinner type='grow' color='info' />
  </div>
</div>
);

Loader.propTypes = {
  isLoading: bool.isRequired,
  className: string,
};

Loader.defaultProps = {
  className: '',
};
export default Loader;
