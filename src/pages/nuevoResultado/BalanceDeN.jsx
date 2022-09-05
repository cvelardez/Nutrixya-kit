import React from "react";
import { Col, Row, CardText, List } from "reactstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import ApexCharts from "../../components/Graficos/charts/apex";

const BalanceDeN = () => {
  const data = {
    labels: [
      "A la siembra",
      "Arrancador o abono orgánico",
      "Rastrojo y precipitación",
      "Mineralización",
      "Fijación simbiótica",
      "Podría haber fijado",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 10, 40, 5, 20, 30],
        backgroundColor: [
          "#f96d00",
          "#f90000",
          "#ffe600",
          "#009ef9",
          "#0400f9",
          "#f900cf",
        ],
        borderColor: [
          "#f96d00",
          "#f90000",
          "#ffe600",
          "#009ef9",
          "#0400f9",
          "#f900cf",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1>Balance De N</h1>{" "}
      <div className="py-2">
        <Row>
          <Col sm="12" md="4" className="mb-sm-4">
            <Doughnut data={data} options={options} />
          </Col>

          <Col
            sm="12"
            md="6"
            className="d-flex align-items-center justify-content-center"
          >
            <List type="unstyled">
              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: "#f96d00" }}
                  className="colorChart"
                ></div>
                <CardText className="fs-2">
                  A la siembra: <span className="fw-bolder">20 kgN/ha</span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: "#f90000" }}
                  className="colorChart"
                ></div>
                <CardText className="fs-2">
                  Arrancador o abono orgánico:{" "}
                  <span className="fw-bolder">10 kgN/ha</span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: "#ffe600" }}
                  className="colorChart"
                ></div>
                <CardText className="fs-2">
                  Rastrojo y precipitación:{" "}
                  <span className="fw-bolder">40 kgN/ha</span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: "#009ef9" }}
                  className="colorChart"
                ></div>
                <CardText className="fs-2">
                  Mineralización: <span className="fw-bolder">5 kgN/ha</span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: "#0400f9" }}
                  className="colorChart"
                ></div>
                <CardText className="fs-2">
                  Fijación simbiótica:{" "}
                  <span className="fw-bolder">20 kgN/ha</span>
                </CardText>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: "#f900cf" }}
                  className="colorChart"
                ></div>
                <CardText className="fs-2">
                  Podría haber fijado:{" "}
                  <span className="fw-bolder">30 kgN/ha</span>
                </CardText>
              </li>
            </List>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm="12" md="12" className="p-3">
            <List type="unstyled" className="d-flex flex-column gap-3">
              <li>
                <CardText className="fs-2">
                  Oferta: <span className="fw-bolder">………..kgN/ha</span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-2">
                  Demanda: <span className="fw-bolder">………..kgN/ha</span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-2">
                  Exceso o déficit: <span className="fw-bolder">………kgN/ha</span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-2">
                  Se removilizó en el cultivo:{" "}
                  <span className="fw-bolder">……………..kgN/ha</span>
                </CardText>
              </li>
            </List>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BalanceDeN;
