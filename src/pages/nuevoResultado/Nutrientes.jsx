import React from "react";
import { CardText, Col, List, Row, UncontrolledTooltip } from "reactstrap";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { FiHelpCircle } from "react-icons/fi";

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
  const colorChart = {
    // color1: "#ff6961",
    color1: "#77dd77",
    color2: "#fdfd96",
    color3: "#84b6f4",
    color4: "#f15fff",
    color5: "#a68069",
    colorOpacity: {
      // color1: "#ff696150",
      color1: "#77dd7750",
      color2: "#fdfd9650",
      color3: "#84b6f450",
      color4: "#f15fff50",
      color5: "#a6806950",
    },
  };

  const dataValueNumberNutrientes = {
    dataTitle: 6240,
    // data1: 9000,
    data1: 6940,
    data2: 6240,
    data3: 9000,
    data4: 9000,
  };

  const data = {
    labels: ["Rendimiento objetivo", "N", "P", "K", "S"],
    labels: ["N", "P", "K", "S"],
    datasets: [
      {
        label: "",
        backgroundColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
        ],
        brderColor: "black",
        borderWidth: 1,
        // barPercentage: 0.5,
        // barThickness: 6,
        maxBarThickness: 80,
        // minBarLength: 2,
        hoverBackgroundColor: [
          colorChart.colorOpacity.color1,
          colorChart.colorOpacity.color2,
          colorChart.colorOpacity.color3,
          colorChart.colorOpacity.color4,
          colorChart.colorOpacity.color5,
          colorChart.colorOpacity.color6,
        ],
        hoverBorderColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
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
      <div className="d-flex align-items-center gap-1 mb-4">
        <CardText className="fs-1 fw-bold m-0 p-0">
          Rendimiento vs Nutrientes
        </CardText>{" "}
        <FiHelpCircle id="rendimientoVsNutrientes" className="fs-2" />
        <UncontrolledTooltip placement="right" target="rendimientoVsNutrientes">
          <span className="fw-bolder">Rendimiento vs Nutrientes</span> Gráfico
          que muestra cuáles son los nutrientes quelimitan el rendimiento
          objetivo, "ley del mínimo".
        </UncontrolledTooltip>
      </div>

      <div className="d-flex align-items-start flex-column justify-content-start mb-4 gap-1">
        <CardText className="fs-3 m-0 p-0">
          Rendimiento sin fertilizar:{" "}
          <span className="fw-bolder">
            {dataValueNumberNutrientes.dataTitle}kg/ha
          </span>
        </CardText>

        <CardText className="fs-3 m-0 p-0">
          Rendimiento con arrancador o abono orgánico:{" "}
          <span className="fw-bolder">.......kg/ha</span>
        </CardText>
      </div>

      <Row>
        <Col sm="12" md="6">
          <CardText>Rendimiento(kg/ha)</CardText>
        </Col>

        <Col sm="12" md="6">
          <CardText className="text-primary">
            Rendimiento objetivo: 9000kg/ha
          </CardText>
        </Col>

        <Col sm="12" md="6" className="p-1">
          <Bar data={data} options={options} />
        </Col>

        <Col sm="12" md="6" className="py-5">
          {/* <CardText className="fs-3">
            Rendimiento objetivo:{" "}
            <span className="fw-bolder">
              {dataValueNumberNutrientes.data1} kg/ha
            </span>
          </CardText> */}

          <List type="unstyled">
            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color1}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-4">
                Rendimiento sin fertilizar con N:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data1} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color2}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-4">
                Rendimiento sin fertilizar con P:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data2} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color3}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-4">
                Rendimiento sin fertilizar con K:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data3} kg/ha
                </span>
              </CardText>
            </li>

            <li className="mb-1 d-flex align-items-center gap-1">
              <div
                style={{ backgroundColor: `${colorChart.color4}` }}
                className="colorChart"
              ></div>
              <CardText className="fs-4">
                Rendimiento sin fertilizar con S:{" "}
                <span className="fw-bolder">
                  {dataValueNumberNutrientes.data4} kg/ha
                </span>
              </CardText>
            </li>
          </List>
        </Col>

        <Col
          sm="12"
          md="6"
          className="d-flex align-items-center justify-content-end"
        >
          <CardText>Nutrientes</CardText>
        </Col>

        <Col sm="12" md="6">
          <CardText> </CardText>
        </Col>
      </Row>
    </>
  );
};

export default Nutrientes;
