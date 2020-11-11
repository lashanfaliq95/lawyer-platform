import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { func, shape } from 'prop-types';

import '../../styles.scss';
import BottomFooter from 'components/Footer/components/BottomFooter';
import ResetCartPage from './ResetPwdCard';
import { getUserIdFromResetToken } from '../../actions';

const ResetPwdCardPage = ({
  match,
  getUserIdFromResetToken: getUserIdFromResetTokenAction,
  user,
  error,
}) => {
  useEffect(() => {
    const { params } = match;
    getUserIdFromResetTokenAction(params.token);
  }, [match, getUserIdFromResetTokenAction]);

  if (error) {
    return error;
  }
  return (
    <Container fluid className="login-page">
      <ResetCartPage user={user} />
      <div className="login-footer">
        <BottomFooter />
      </div>
    </Container>
  );
};

ResetPwdCardPage.propTypes = {
  match: shape({ params: shape() }).isRequired,
  getUserIdFromResetToken: func.isRequired,
  user: shape({}),
  error: shape({}),
};

ResetPwdCardPage.defaultProps = {
  user: null,
  error: null,
};

const mapStateToProps = (state) => ({
  user: state.login.resetUser,
  error: state.login.resetUser.error,
});

export default connect(mapStateToProps, { getUserIdFromResetToken })(
  ResetPwdCardPage,
);
