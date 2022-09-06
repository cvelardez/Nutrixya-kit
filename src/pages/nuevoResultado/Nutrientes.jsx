import React from "react";
import { CardText, Col, List, Row } from "reactstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Nutrientes = () => {
  const data = {
    labels: [
      "Rendimiento objetivo",
      "Rendimiento sin aplicar N",
      "Rendimiento sin aplicar P",
      "Rendimiento sin aplicar K",
      "Rendimiento sin aplicar S",
    ],
    datasets: [
      {
        label: "Rendimientos",
        backgroundColor: [
          "#f96d00",
          "#f90000",
          "#ffe600",
          "#009ef9",
          "#0400f9",
        ],
        brderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: [
          "#f96d0020",
          "#f9000020",
          "#ffe60020",
          "#009ef920",
          "#0400f920",
          "#f900cf20",
        ],
        hoverBorderColor: [
          "#f96d00",
          "#f90000",
          "#ffe600",
          "#009ef9",
          "#0400f9",
        ],
        data: [33, 12, 60, 20, 10, 88],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1 className="mb-5">Rendimiento vs Nutrientes</h1>

      <CardText className="fs-2 mb-2">
        Rendimiento sin fertilizar:{" "}
        <span className="fw-bolder">…………..kg/ha</span>
      </CardText>
      <Row>
        <Col sm="12" md="8">
          <Bar data={data} options={options} />
        </Col>

        <Col sm="12" md="12" className="mt-5">
          <List type="unstyled">
            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#f96d00" }}
                className="colorChart"
              ></div>
              <CardText className="fs-2">
                Rendimiento objetivo:{" "}
                <span className="fw-bolder">33 kg/ha</span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#f90000" }}
                className="colorChart"
              ></div>
              <CardText className="fs-2">
                Rendimiento sin aplicar N:{" "}
                <span className="fw-bolder">12 kg/ha</span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#ffe600" }}
                className="colorChart"
              ></div>
              <CardText className="fs-2">
                Rendimiento sin aplicar P:{" "}
                <span className="fw-bolder">60 kg/ha</span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#009ef9" }}
                className="colorChart"
              ></div>
              <CardText className="fs-2">
                Rendimiento sin aplicar K:{" "}
                <span className="fw-bolder">20 kg/ha</span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#0400f9" }}
                className="colorChart"
              ></div>
              <CardText className="fs-2">
                Rendimiento sin aplicar S:{" "}
                <span className="fw-bolder">10 kg/ha</span>
              </CardText>
            </li>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default Nutrientes;
