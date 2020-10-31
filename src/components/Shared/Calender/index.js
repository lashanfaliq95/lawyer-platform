import React, { useState } from 'react';
import {
  Row, Col, Container, Button,
} from 'reactstrap';
import { string } from 'prop-types';
import './styles.scss';

import HS from 'components/Shared/HorizontalSeparator';
import Icon from 'components/Shared/Icon';
import Loader from 'components/Shared/Loader';

const Calender = ({ className }) => {
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
      <Row className="calender-header">
        <Icon name="chevron-left" size="large" onClick={toggle} />
        <Col>
          <div className="day-name">Mo.</div>
          <div className="date">test</div>
        </Col>
        <Col>
          <div className="day-name">Di.</div>
          <div className="date">test</div>
        </Col>
        <Col>
          <div className="day-name">Mi.</div>
          <div className="date">test</div>
        </Col>
        <Col>
          <div className="day-name">Do.</div>
          <div className="date">test</div>
        </Col>
        <Col>
          <div className="day-name">Fr.</div>
          <div className="date">test</div>
        </Col>
        <Icon name="chevron-right" size="large" onClick={toggle} />
      </Row>
      <div className="separator">
        <HS color="#ced4da" />
      </div>

      <Row className="body">
        {isLoading
          ? <Loader isLoading={isLoading} className="calender-loader" />
          : (
            <>
              {isEmpty ? (
                <div className="no-appointments-overlay">
                  <div className="message">
                    <div className="next-slot">
                      <Button className="next-slot-btn" color="link">
                        <p>sadsad</p>

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
                        test
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
                        test
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
            </>
          )}
      </Row>
      {!isEmpty && !isLoading ? (
        <>
          <div className="separator">
            <HS color="#ced4da" />
          </div>
          <Row className="bottom-button">
            <Button color="link">asdasd</Button>
          </Row>
        </>
      ) : null}
    </Container>
  );
};

Calender.propTypes = {
//   isEmpty: bool,
  className: string,
};

Calender.defaultProps = {
//   isEmpty: false,
  className: '',
};

export default Calender;
