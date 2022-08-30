import React from "react";
import { Col, Row } from "reactstrap";

import balanceN from "./balanceN.jpg";
import dosisDeMantenimiento from "./dosisDeMantenimiento.jpg";
import rendimientoSinAbonar from "./rendimientoSinAbonar.jpg";

const BalanceDeN = () => {
  return (
    <>
      <h1>Balance De N - Test</h1>{" "}
      <div className="py-2">
        <Row>
          <Col>
            <img src={balanceN} alt="Grafico balance n" className="img-fluid" />
          </Col>
          <Col>
            <img
              src={dosisDeMantenimiento}
              alt="Grafico dosisDeMantenimiento"
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <img
              src={rendimientoSinAbonar}
              alt="Grafico rendimientoSinAbonar"
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BalanceDeN;
