import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import {
  Button, ButtonToolbar, ButtonGroup, Row,
} from 'reactstrap';
import formatMessages from 'components/formatMessages';
import { searchLawyerByLetter } from 'components/CommonComponents/actions';
import { ALPHABET } from 'components/CommonComponents/constants';
import messages from '../messages';

const AlphabeticalSearch = (props) => {
  const onClickLetter = (e) => {
    props.searchLawyerByLetter(e.target.value);
  };

  return (
    <Row className="footer-search">
      <p className="search-header">{formatMessages(messages.searchLawyers)}</p>
      <ButtonToolbar>
        <ButtonGroup>
          {ALPHABET.split('').map((letter) => (
            <Button color="link" value={letter} onClick={onClickLetter}>
              {letter}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>
    </Row>
  );
};

AlphabeticalSearch.propTypes = {
  searchLawyerByLetter: func.isRequired,
};

export default connect(null, { searchLawyerByLetter })(AlphabeticalSearch);
