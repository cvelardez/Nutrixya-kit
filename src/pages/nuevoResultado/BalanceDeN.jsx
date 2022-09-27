import React from "react";
import { Col, Row, CardText, List, UncontrolledTooltip } from "reactstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import ApexCharts from "../../components/Graficos/charts/apex";
import { FiHelpCircle } from "react-icons/fi";

const BalanceDeN = () => {
  const colorChart = {
    color1: "#ff6961",
    color2: "#77dd77",
    color3: "#fdfd96",
    color4: "#84b6f4",
    color5: "#f15fff",
    color6: "#a68069",
  };

  const dataValueNumber = {
    data1: 62,
    data2: 9,
    data3: 30,
    data4: 118,
    data5: 0,
    data6: 0,
    dataTwo: {
      data1: 219,
      data2: 257,
      data3: -38,
      data4: 0,
    },
  };
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
        data: [
          dataValueNumber.data1,
          dataValueNumber.data2,
          dataValueNumber.data3,
          dataValueNumber.data4,
          dataValueNumber.data5,
          dataValueNumber.data6,
        ],
        backgroundColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
          colorChart.color6,
        ],
        borderColor: [
          colorChart.color1,
          colorChart.color2,
          colorChart.color3,
          colorChart.color4,
          colorChart.color5,
          colorChart.color5,
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
      <div className="d-flex align-items-center gap-1 mb-4">
        <CardText className="fs-1 fw-bold m-0 p-0">
          Balance de Nitrógeno
        </CardText>{" "}
        <FiHelpCircle id="balanceDeNitrogeno" className="fs-2" />
        <UncontrolledTooltip placement="right" target="balanceDeNitrogeno">
          <span className="fw-bolder">Balance de Nitrógeno</span> Diferencia
          entre el nitrógeno disponible y el que demanda el cultivo.
        </UncontrolledTooltip>
      </div>

      <div className="py-2">
        <Row>
          <Col sm="12" md="4" className="mb-4">
            <Doughnut data={data} options={options} />
          </Col>

          <Col
            sm="12"
            md="6"
            className="d-flex flex-column align-items-start justify-content-center"
          >
            <List type="unstyled">
              <li className="mb-2 d-flex align-items-center gap-1">
                <CardText className="fs-3 fw-bold m-0 p-0">
                  Oferta de N
                </CardText>{" "}
                <FiHelpCircle id="ofertaDeN" className="fs-5" />
                <UncontrolledTooltip placement="right" target="ofertaDeN">
                  <span className="fw-bolder">Oferta de N</span> Sumatoria de
                  cada fracción de nitrógeno, expresada en kg/ha.
                </UncontrolledTooltip>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color1}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4 m-0 p-0">
                  A la siembra:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data1} kgN/ha
                  </span>
                </CardText>{" "}
                <FiHelpCircle id="aLaSiembra" className="fs-5" />
                <UncontrolledTooltip placement="right" target="aLaSiembra">
                  <span className="fw-bolder">A la siembra</span> Cantidad de
                  nitrógeno de los nitratos del suelo.
                </UncontrolledTooltip>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color2}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4 m-0 p-0">
                  Arrancador o abono orgánico:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data2} kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="arrancadoroAbonoOrgánico" className="fs-5" />

                <UncontrolledTooltip
                  placement="right"
                  target="arrancadoroAbonoOrgánico"
                >
                  <span className="fw-bolder">Arrancador o abono orgánico</span>{" "}
                  Cantidad de nitrógeno del arrancador o abono
                  orgánicopreviamente seleccionado.
                </UncontrolledTooltip>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color3}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4 m-0 p-0">
                  Rastrojo y precipitación:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data3} kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="rastrojoyPrecipitación" className="fs-5" />

                <UncontrolledTooltip
                  placement="right"
                  target="rastrojoyPrecipitación"
                >
                  <span className="fw-bolder">Rastrojo y precipitación</span>{" "}
                  Aporte de nitrógeno del rastrojo del cultivo antecesor y
                  precipitaciones.
                </UncontrolledTooltip>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color4}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4 m-0 p-0">
                  Mineralización:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data4} kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="mineralizacion" className="fs-5" />

                <UncontrolledTooltip placement="right" target="mineralizacion">
                  <span className="fw-bolder">Mineralización</span> Aporte de
                  nitrógeno a partir de la mineralización de la materia orgánica
                  a lolargo del ciclo del cultivo.
                </UncontrolledTooltip>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color5}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4 m-0 p-0">
                  Fijación simbiótica:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data5} kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="fijacionSimbiotica" className="fs-5" />

                <UncontrolledTooltip
                  placement="right"
                  target="fijacionSimbiotica"
                >
                  <span className="fw-bolder">Fijación simbiótica</span> Solo
                  para leguminosas. Aporte de nitrógeno a través de los nódulos.
                </UncontrolledTooltip>
              </li>

              <li className="mb-1 d-flex align-items-center gap-1">
                <div
                  style={{ backgroundColor: `${colorChart.color6}` }}
                  className="colorChart"
                ></div>
                <CardText className="fs-4 m-0 p-0">
                  Podría haber fijado:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.data6} kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="podriaHaberFijado" className="fs-5" />

                <UncontrolledTooltip
                  placement="right"
                  target="podriaHaberFijado"
                >
                  <span className="fw-bolder">Podría haber fijado</span> Aporte
                  de nitrógeno a través de los nódulos en condiciones optimas
                  desuelo.
                </UncontrolledTooltip>
              </li>
            </List>

            <List type="unstyled" className="d-flex flex-column gap-1">
              <li>
                <CardText className="fs-4">
                  Total oferta de N:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data1}kgN/ha
                  </span>
                </CardText>
              </li>

              <li className="d-flex align-items-center gap-1">
                <CardText className="fs-4 m-0 p-0">
                  Demanda de N:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data2}kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="demandaDeN" className="fs-5" />

                <UncontrolledTooltip placement="right" target="demandaDeN">
                  <span className="fw-bolder">Demanda de N</span> Cantidad de
                  nitrógeno que requiere el cultivo en función del
                  rendimientoobjetivo.
                </UncontrolledTooltip>
              </li>

              <li>
                <CardText className="fs-4 m-0 p-0">
                  Déficit o exceso de N:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data3}kgN/ha
                  </span>{" "}
                  <br />
                  Comienza el día <span className="fw-bolder">38</span>{" "}
                  <FiHelpCircle id="deficitExcesoDeN" className="fs-5 ms-1" />
                </CardText>

                <UncontrolledTooltip
                  placement="right"
                  target="deficitExcesoDeN"
                >
                  <span className="fw-bolder">Comienza el día</span> Indica
                  cuando comienza el déficit de nitrógeno para planificar
                  lafertilización/refertilización.
                </UncontrolledTooltip>
              </li>

              <li className="d-flex aling-item-center gap-1">
                <CardText className="fs-4 m-0 p-0">
                  Se removilizó en el cultivo:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data4}kgN/ha
                  </span>
                </CardText>

                <FiHelpCircle id="seRemovilizoEnElCultivo" className="fs-5" />

                <UncontrolledTooltip
                  placement="right"
                  target="seRemovilizoEnElCultivo"
                >
                  <span className="fw-bolder">Se removilizó en el cultivo</span>{" "}
                  de nitrógeno desde diferentes partes de la planta hacia el
                  grano.
                </UncontrolledTooltip>
              </li>
            </List>
          </Col>
        </Row>

        {/* <Row className="mt-5">
          <Col sm="12" md="12" className="p-3">
            <List type="unstyled" className="d-flex flex-column gap-3">
              <li>
                <CardText className="fs-3">
                  Oferta:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data1}kgN/ha
                  </span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-3">
                  Demanda:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data2}kgN/ha
                  </span>
                </CardText>
              </li>

              <li>
                <CardText className="fs-3">
                  Déficit:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data3}kgN/ha
                  </span>{" "}
                  Comienza el día 38.
                </CardText>
              </li>

              <li>
                <CardText className="fs-3">
                  Se removilizó en el cultivo:{" "}
                  <span className="fw-bolder">
                    {dataValueNumber.dataTwo.data4}kgN/ha
                  </span>
                </CardText>
              </li>
            </List>
          </Col>
        </Row> */}
      </div>
    </>
  );
};

export default BalanceDeN;
