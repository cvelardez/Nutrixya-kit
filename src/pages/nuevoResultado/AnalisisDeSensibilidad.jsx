import React from "react";

import { Row, Col, CardText } from "reactstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalisisDeSensibilidad = () => {
  const dataValueNumberAnalisis = {
    data1: 461,
    data2: 1.36,
    data3: 9000,
  };

  const scoresOne = [0, 20, 40, 30, 10, 1, 0];
  const scoresTwo = [0, 5, 10, 20, 30, 40, 50];

  const data = {
    labels: [100, 200, 300, 400, 500, 600, 700],
    datasets: [
      {
        label: "Dataset 1",
        data: scoresOne,
        tension: 0.3,
        borderColor: "#fabfb7",
        backgroundColor: "#fabfb750",
      },

      {
        label: "Dataset 2",
        data: scoresTwo,
        tension: 0.3,
        borderColor: "#89a0be",
        backgroundColor: "#89a0be50",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <h1 className="mb-5">Análisis De inversión</h1>
      <Row className="my-5">
        <Col
          sm="12"
          md="6"
          className="d-flex flex-column align-items-end gap-2"
        >
          <Line data={data} options={options} />

          <CardText className="fs-4 mb-3">
            Rendimiento:
            <span className="fw-bolder">
              {" "}
              {dataValueNumberAnalisis.data3} kg/ha
            </span>
          </CardText>
        </Col>

        <Col sm="12" md="6">
          <div className="mb-1 d-flex align-items-center gap-1">
            <div
              style={{ backgroundColor: "#fabfb7" }}
              className="colorChart"
            ></div>
            <CardText className="fs-5">
              Utilidad:
              <span className="fw-bolder">
                {" "}
                {dataValueNumberAnalisis.data1} u$s/ha
              </span>
            </CardText>
          </div>

          <div className="mb-1 d-flex align-items-center gap-1">
            <div
              style={{ backgroundColor: "#89a0be" }}
              className="colorChart"
            ></div>
            <CardText className="fs-5">
              Rentabilidad:
              <span className="fw-bolder">
                {" "}
                {dataValueNumberAnalisis.data2} (Utilidad u$s/Inversión u$s)
              </span>
            </CardText>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AnalisisDeSensibilidad;
