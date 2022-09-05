import React from "react";

import { Row, Col } from "reactstrap";

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
  const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];

  const data = {
    labels: [100, 200, 300, 400, 500, 600, 700],
    datasets: [
      {
        label: "Dataset 1",
        data: scores,
        tension: 0.3,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
      <h1 className="mb-5">Análisis De Sensibilidad</h1>
      {/* <div className="w-100  d-flex align-items-center justify-content-center">
        <h2 className="fs-2 fw-bolder text-primary mt-2">En construcción</h2>
      </div> */}
      <Row>
        <Col sm="12" md="6">
          <Line data={data} options={options} />
        </Col>
      </Row>
    </>
  );
};

export default AnalisisDeSensibilidad;
