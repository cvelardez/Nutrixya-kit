import React from "react";
import { CardSubtitle, CardText, List } from "reactstrap";

const BalanceCero = () => {
  return (
    <>
      <h1 className="mb-3">Balance Cero</h1>
      {/* <div className="w-100  d-flex align-items-center justify-content-center">
        <h2 className="fs-2 fw-bolder text-primary mt-2">En construcción</h2>
      </div> */}
      <CardSubtitle className="fs-2 mb-3 fw-bold">
        Dosis mínima para evitar el agotamiento del suelo.
      </CardSubtitle>

      <List type="unstyled">
        <li className="mb-1">
          <CardText className="fs-3">
            <span className="fs-1 fw-bolder text-primary">N</span>{" "}
            <span className="fw-bolder">…………kg/ha</span> de
            <span className="fw-bolder">…………</span> (fertilizante seleccionado){" "}
          </CardText>
        </li>

        <li className="mb-1">
          <CardText className="fs-3">
            <span className="fs-1 fw-bolder text-primary">P</span>{" "}
            <span className="fw-bolder">…………kg/ha</span> de
            <span className="fw-bolder">…………</span> (fertilizante seleccionado)
          </CardText>
        </li>

        <li className="mb-1">
          <CardText className="fs-3">
            <span className="fs-1 fw-bolder text-primary">K</span>{" "}
            <span className="fw-bolder">…………kg/ha</span> de
            <span className="fw-bolder">…………</span> (fertilizante seleccionado)
          </CardText>
        </li>

        <li className="mb-3">
          <CardText className="fs-3">
            <span className="fs-1 fw-bolder text-primary">S</span>{" "}
            <span className="fw-bolder">…………kg/ha</span> de{" "}
            <span className="fw-bolder">…………</span> (fertilizante seleccionado)
          </CardText>
        </li>

        <li>
          <CardText className="fs-3">
            <span className="fs-1 fw-bolder text-primary">Ca y Mg</span>{" "}
            <span className="fw-bolder">…………kg/ha</span> de{" "}
            <span className="fw-bolder">…………</span> (fertilizante seleccionado)
          </CardText>
        </li>
      </List>

      <CardSubtitle className="fs-2 mb-2 mt-3 fw-bold">
        Dosis de corrección de P.
      </CardSubtitle>

      <CardText className="fs-3 mb-2">
        Para enriquecer 20 cm de suelo se debe aplicar además{" "}
        <span className="fw-bolder">…………kg/ha</span> <br /> del fertilizante
        seleccionado por cada ppm de P que se desee incrementar.
      </CardText>
    </>
  );
};

export default BalanceCero;
