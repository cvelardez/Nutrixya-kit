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
  const dataValueNumberNutrientes = {
    dataTitle: 6240,
    data1: 9000,
    data2: 6940,
    data3: 6240,
    data4: 9000,
    data5: 9000,
  };

  const data = {
    // labels: [
    //   "Rendimiento objetivo",
    //   "Rendimiento sin aplicar N",
    //   "Rendimiento sin aplicar P",
    //   "Rendimiento sin aplicar K",
    //   "Rendimiento sin aplicar S",
    // ],
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "Rendimientos",
        backgroundColor: [
          "#fabfb7",
          "#fdf9c4",
          "#ffda9e",
          "#c5c6c8",
          "#b2e2f2",
        ],
        brderColor: "black",
        borderWidth: 1,
        // barPercentage: 0.5,
        // barThickness: 6,
        maxBarThickness: 80,
        // minBarLength: 2,
        hoverBackgroundColor: [
          "#fabfb750",
          "#fdf9c450",
          "#ffda9e50",
          "#c5c6c850",
          "#b2e2f250",
          "#89a0be50",
        ],
        hoverBorderColor: [
          "#fabfb7",
          "#fdf9c4",
          "#ffda9e",
          "#c5c6c8",
          "#b2e2f2",
        ],
        data: [
          dataValueNumberNutrientes.data1,
          dataValueNumberNutrientes.data2,
          dataValueNumberNutrientes.data3,
          dataValueNumberNutrientes.data4,
          dataValueNumberNutrientes.data5,
        ],
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

      <CardText className="fs-3 mb-2">
        Rendimiento sin fertilizar:{" "}
        <span className="fw-bolder">
          {dataValueNumberNutrientes.dataTitle}kg/ha
        </span>
      </CardText>
      <Row>
        <Col sm="12" md="6" className="p-1">
          <Bar data={data} options={options} />
        </Col>

        <Col sm="12" md="6" className="py-5">
          <List type="unstyled">
            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#fabfb7" }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento objetivo:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data1} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#fdf9c4" }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar N:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data2} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#ffda9e" }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar P:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data3} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#c5c6c8" }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar K:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data4} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: "#b2e2f2" }}
                className="colorChart"
              ></div>
              <CardText className="fs-3">
                Rendimiento sin aplicar S:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data5} kg/ha
                </span>
              </CardText>
            </li>
          </List>
        </Col>
      </Row>
    </>
  );
};

export default Nutrientes;
