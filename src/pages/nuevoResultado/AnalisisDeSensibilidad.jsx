import React from "react";

import { Row, Col, CardText, UncontrolledTooltip } from "reactstrap";

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

import { FiHelpCircle } from "react-icons/fi";

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
  const colorChart = {
    color1: "#ff6961",
    color2: "#77dd77",
    color3: "#fdfd96",
    color4: "#84b6f4",
    color5: "#f15fff",
    color6: "#a68069",
    colorOpacity: {
      color1: "#ff696150",
      color2: "#77dd7750",
      color3: "#fdfd9650",
      color4: "#84b6f450",
      color5: "#f15fff50",
      color6: "#a6806950",
    },
  };

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
        borderColor: colorChart.color1,
        backgroundColor: colorChart.colorOpacity.color1,
      },

      {
        label: "Dataset 2",
        data: scoresTwo,
        tension: 0.3,
        borderColor: colorChart.color5,
        backgroundColor: colorChart.colorOpacity.color5,
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
      <div className="d-flex align-items-center gap-1 mb-4">
        <CardText className="fs-3 fw-bold m-0 p-0">
          Análisis De inversión
        </CardText>{" "}
        <FiHelpCircle id="analisisDeInversión" className="fs-2" />
        <UncontrolledTooltip placement="right" target="analisisDeInversión">
          <span className="fw-bolder">Análisis De inversión</span> Contempla un
          análisis económico de la técnica de fertilización
          seleccionada.Moviendo el cursor en el eje de las “x” permite cambiar
          el rendimiento objetivo ajustando la dosisde fertilizantes para lograr
          la mejor alternativa.
        </UncontrolledTooltip>
      </div>

      <div>
        <Row>
          <div className="d-flex align-items-center gap-1">
            <span className="fs-3 fw-bolder text-primary">N</span>{" "}
            <CardText className="fs-4">
              {/* Urea: Unidad  */}
              Urea: <span className="fw-bolder">120 kg/ha</span>
            </CardText>
          </div>
        </Row>

        <Row className="my-1">
          <div className="d-flex align-items-center gap-1">
            <span className="fs-3 fw-bolder text-primary">P</span>{" "}
            <CardText className="fs-4">
              {/* Superfosfato triple de calcio SPS: Unidad{" "} */}
              Superfosfato triple de calcio SPT:{" "}
              <span className="fw-bolder">80 kg/ha</span>
            </CardText>
          </div>
        </Row>

        <Row className="my-1">
          <div className="d-flex align-items-center gap-1">
            <span className="fs-3 fw-bolder text-primary">K</span>{" "}
            <CardText className="fs-4">
              {/* Cloruro de potasio: Unidad{" "} */}
              Cloruro de potasio: <span className="fw-bolder">0 kg/ha</span>
            </CardText>
          </div>
        </Row>

        <Row>
          <div className="d-flex align-items-center gap-1">
            <span className="fs-3 fw-bolder text-primary">S</span>{" "}
            <CardText className="fs-4">
              {/* Yeso: Unidad  */}
              Yeso: <span className="fw-bolder">0 kg/ha</span>
            </CardText>
          </div>
        </Row>
      </div>

      <Row className="my-5">
        <Col sm="12" md="6" className="d-flex flex-column align-items-end">
          <div className="w-100">
            <CardText className="fs-4 m-0 p-0">U$s/ha</CardText>
          </div>

          <Line data={data} options={options} />

          <CardText className="fs-4 mb-3 mt-1">
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
              style={{ backgroundColor: `${colorChart.color1}` }}
              className="colorChart"
            ></div>
            <CardText className="fs-5 m-0 p-0">
              Utilidad:
              <span className="fw-bolder">
                {" "}
                {dataValueNumberAnalisis.data1} u$s/ha
              </span>
            </CardText>

            <FiHelpCircle id="utilidad" className="fs-5" />
            <UncontrolledTooltip placement="right" target="utilidad">
              <span className="fw-bolder">Utilidad</span> Diferencia entre los
              ingresos por rendimiento gracias al fertilizante
              (rendimientoaplicando-rendimiento sin aplicar x el precio del
              grano, fardo o lo que sea el producto) y los gastosvinculados con
              fertilización (precio muestreo + análisis + precio aplicación
              fertilizante + preciofertilizante incluyendo abonos orgánicos,
              arrancadores... si es que se aplican).
            </UncontrolledTooltip>
          </div>

          <div className="mb-1 d-flex align-items-center gap-1">
            <div
              style={{ backgroundColor: `${colorChart.color5}` }}
              className="colorChart"
            ></div>
            <CardText className="fs-5 m-0 p-0">
              Rentabilidad:
              <span className="fw-bolder">
                {" "}
                {dataValueNumberAnalisis.data2} (Utilidad u$s/Inversión u$s)
              </span>
            </CardText>

            <FiHelpCircle id="rentabilidad" className="fs-5" />
            <UncontrolledTooltip placement="right" target="rentabilidad">
              <span className="fw-bolder">Rentabilidad</span> Medida de retorno
              a lainversión enfertilizantes. Informacuántos dólares esposible
              obtener porcada dólar invertido.
            </UncontrolledTooltip>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AnalisisDeSensibilidad;
