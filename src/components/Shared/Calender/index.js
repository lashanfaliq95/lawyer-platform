import React, { useState } from 'react';
import {
  Row, Col, Container, Button,
} from 'reactstrap';
import { string } from 'prop-types';
import './styles.scss';

import HS from 'components/Shared/HorizontalSeparator';
import Icon from 'components/Shared/Icon';
import Loader from 'components/Shared/Loader';
import formatMessages from 'components/formatMessages';

const Calender = ({ className, buttonText }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsEmpty(!isEmpty);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Container className={className}>
      {isLoading
        ? <Loader isLoading={isLoading} className="calender-loader" />
        : (
          <>
            <Row className="calender-header">
              <Icon name="chevron-left" size="large" onClick={toggle} />
              <Col>
                <div className="day-name">Mo.</div>
                <div className="date">21. Okt</div>
              </Col>
              <Col>
                <div className="day-name">Di.</div>
                <div className="date">22. Okt</div>
              </Col>
              <Col>
                <div className="day-name">Mi.</div>
                <div className="date">23. Okt</div>
              </Col>
              <Col>
                <div className="day-name">Do.</div>
                <div className="date">24. Okt</div>
              </Col>
              <Col>
                <div className="day-name">Fr.</div>
                <div className="date">25. Okt</div>
              </Col>
              <Icon name="chevron-right" size="large" onClick={toggle} />
            </Row>
            <div className="separator">
              <HS color="#ced4da" />
            </div>

            <Row className="body">

              {isEmpty ? (
                <div className="no-appointments-overlay">
                  <div className="message">
                    <div className="next-slot">
                      <Button className="next-slot-btn" color="link">
                        <p className="text">Nächster Termin am 25. Januar 2021</p>

                        <Icon name="chevron-right" />
                      </Button>

                    </div>

                  </div>
                </div>
              )
                : (
                  <>
                    <Col>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                    </Col>
                    <Col>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                    </Col>
                    <Col>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                    </Col>
                    <Col>
                      <button className="slot" type="button">
                        9.30
                      </button>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                    </Col>
                    <Col>
                      <button className="slot" type="button">
                        10.30
                      </button>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                      <div className="appointment">
                        <div className="empty-slot" />
                      </div>
                    </Col>
                  </>
                )}

            </Row>
          </>
        )}
      {!isEmpty && !isLoading ? (
        <>
          <div className="separator">
            <HS color="#ced4da" />
          </div>
          <Row className="bottom-button">
            <Button color="link">{formatMessages(buttonText)}</Button>
          </Row>
        </>
      ) : null}
    </Container>
  );
};

Calender.propTypes = {
//   isEmpty: bool,
  className: string,
  buttonText: string,
};

Calender.defaultProps = {
//   isEmpty: false,
  className: '',
  buttonText: '',
};

export default Calender;
