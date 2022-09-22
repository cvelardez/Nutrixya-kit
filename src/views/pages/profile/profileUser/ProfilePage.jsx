import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
  Table,
  Form,
  Label,
  Input,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";

import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

import toolBox from "@src/assets/images/icons/location.svg";
import avatar from "../../../../assets/images/portrait/small/avatar-s-1.jpg";
import PJ2 from "@src/assets/images/avatar/PJ-2.png";
import banner1 from "../../../../assets/images/banner.png";

import { HiOutlineArrowSmLeft } from "react-icons/hi";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const ProfilePage = () => {
  const {
    nombreUsuario,
    setNombreUsuario,
    data,
    colorScheme,
    setColorScheme,
    setVerRecomendacion,
    setAddRecomendacion,
    editProfileAcount,
    setEditProfileAcount,
    avatares,
  } = useContext(DataContext);

  const navigate = useNavigate();

  const [settingPassword, setSettingPassword] = useState(false);

  const dataSlice = data.slice(0, 2);

  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const toggle = () => setModal(!modal);

  const modSpinner = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      toggle();
    }, 2500);
  };

  return (
    <>
      {editProfileAcount ? (
        <>
          <Card>
            <CardHeader className="d-flex flex-column align-items-start">
              <CardTitle className="d-flex align-items-center gap-1">
                <HiOutlineArrowSmLeft
                  className="fs-3 pointer"
                  onClick={() => setEditProfileAcount(!editProfileAcount)}
                />{" "}
                Configuración del perfil
              </CardTitle>
              <div className="mt-2">
                <CardSubtitle className="fw-bolder">
                  Información del usuario
                </CardSubtitle>
                <CardText>
                  Acá podés editar información pública sobre tu cuenta.
                </CardText>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6" sm="12" className="py-4 px-1">
                  <Form>
                    <div className="mb-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="martinnutrixya@gmail.com"
                        value="martinnutrixya@gmail.com"
                      />
                    </div>

                    <div className="mb-2">
                      <Label>Nombre de Usuario</Label>
                      <Input
                        type="text"
                        name="Nombre de Usuario"
                        placeholder="Martín - Nutrixya"
                      />
                    </div>

                    <div className="mb-2">
                      <Label>Teléfono</Label>
                      <Input
                        type="number"
                        name="Teléfono"
                        placeholder="3512222222"
                      />
                    </div>

                    <div className="mb-2 w-100">
                      <Button
                        color="primary"
                        outline
                        onClick={(e) => {
                          e.preventDefault(),
                            setSettingPassword(!settingPassword);
                        }}
                      >
                        {!settingPassword
                          ? "¿Querés cambiar tu contraseña?"
                          : "Cancelar cambio"}
                      </Button>
                    </div>

                    {!settingPassword ? null : (
                      <>
                        <Row>
                          <div className="mb-2">
                            <Label>Contraseña actual</Label>
                            <Input
                              type="password"
                              placeholder="*************"
                            />
                          </div>
                          <Col md="6" sm="12">
                            <Label>Contraseña nueva</Label>
                            <Input
                              type="password"
                              placeholder="*************"
                            />
                          </Col>

                          <Col md="6" sm="12">
                            <Label>Repetir contraseña nueva</Label>
                            <Input
                              type="password"
                              placeholder="*************"
                            />
                          </Col>
                        </Row>
                      </>
                    )}

                    <div className="mt-2">
                      <Button
                        color="primary"
                        onClick={() => setEditProfileAcount(!editProfileAcount)}
                      >
                        Guardar
                      </Button>
                    </div>
                  </Form>
                </Col>
                <Col
                  md="6"
                  sm="12"
                  className="py-4 px-1 d-flex flex-column align-items-center gap-2"
                >
                  <div className="w-100">
                    <CardText className="fw-bolder">Avatar</CardText>
                  </div>
                  <img
                    src={
                      localStorage.getItem("Avatar")
                        ? localStorage.getItem("Avatar")
                        : avatares.PJ2
                    }
                    alt={"avatar user profile"}
                    width={200}
                    height={200}
                    className="rounded-circle imgStyle"
                  />

                  <Button color="primary" onClick={toggle}>
                    Cambiar avatar
                  </Button>

                  <Modal
                    isOpen={modal}
                    toggle={toggle}
                    centered="true"
                    size="lg"
                  >
                    <ModalHeader>Cambia tu avatar</ModalHeader>
                    <ModalBody className="p-2">
                      {!spinner ? (
                        <>
                          <Row>
                            <Col
                              md="4"
                              sm="12"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={avatares.PJ1}
                                alt={"avatar user profile"}
                                width={130}
                                height={130}
                                className="rounded-circle imgStyle pointer scalee"
                                onClick={() =>
                                  localStorage.setItem("Avatar", avatares.PJ1)
                                }
                              />
                            </Col>
                            <Col
                              md="4"
                              sm="12"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={avatares.PJ2}
                                alt={"avatar user profile"}
                                width={130}
                                height={130}
                                className="rounded-circle imgStyle pointer scalee"
                                onClick={() =>
                                  localStorage.setItem("Avatar", avatares.PJ2)
                                }
                              />
                            </Col>
                            <Col
                              md="4"
                              sm="12"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={avatares.PJ3}
                                alt={"avatar user profile"}
                                width={130}
                                height={130}
                                className="rounded-circle imgStyle pointer scalee"
                                onClick={() =>
                                  localStorage.setItem("Avatar", avatares.PJ3)
                                }
                              />
                            </Col>
                          </Row>

                          <Row className="mt-5">
                            <Col
                              md="4"
                              sm="12"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={avatares.PJ4}
                                alt={"avatar user profile"}
                                width={130}
                                height={130}
                                className="rounded-circle imgStyle pointer scalee"
                                onClick={() =>
                                  localStorage.setItem("Avatar", avatares.PJ4)
                                }
                              />
                            </Col>
                            <Col
                              md="4"
                              sm="12"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={avatares.PJ5}
                                alt={"avatar user profile"}
                                width={130}
                                height={130}
                                className="rounded-circle imgStyle pointer scalee"
                                onClick={() =>
                                  localStorage.setItem("Avatar", avatares.PJ5)
                                }
                              />
                            </Col>
                            <Col
                              md="4"
                              sm="12"
                              className="d-flex align-items-center justify-content-center"
                            >
                              <img
                                src={avatares.PJ6}
                                alt={"avatar user profile"}
                                width={130}
                                height={130}
                                className="rounded-circle imgStyle pointer scalee"
                                onClick={() =>
                                  localStorage.setItem("Avatar", avatares.PJ6)
                                }
                              />
                            </Col>
                          </Row>
                        </>
                      ) : (
                        <>
                          <div className="d-flex align-items-center justify-content-center w-100 py-5">
                            <Spinner color="primary" size="" type="grow">
                              Loading...
                            </Spinner>
                          </div>
                        </>
                      )}
                    </ModalBody>
                    {!spinner ? (
                      <ModalFooter>
                        <Button color="danger" onClick={toggle}>
                          Cancelar
                        </Button>{" "}
                        <Button color="primary" onClick={modSpinner}>
                          Aceptar
                        </Button>
                      </ModalFooter>
                    ) : null}
                  </Modal>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          <Card>
            <CardHeader>
              <div className="boxImage">
                <div className="containerTextBanner d-flex align-items-center gap-2">
                  <img
                    src={
                      localStorage.getItem("Avatar")
                        ? localStorage.getItem("Avatar")
                        : avatares.PJ2
                    }
                    alt={"avatar user profile"}
                    width={130}
                    height={130}
                    className="rounded-circle imgStyle"
                  />
                  <div className="d-flex flex-column mb-2">
                    <CardText className="nameBanner">{nombreUsuario}</CardText>
                    <CardText className="correoBanner">
                      martinnutrixya@gmail.com
                    </CardText>
                  </div>
                </div>
                <Button
                  color="primary"
                  className="bottonBanner"
                  onClick={() => setEditProfileAcount(true)}
                >
                  Editar
                </Button>
              </div>
            </CardHeader>
            <CardBody className="mt-5 pt-5">
              <CardTitle>{data.length <= 1 ? "lote" : "lotes"}</CardTitle>
              <div className="d-flex align-items-center gap-2">
                {data.length === 0 ? (
                  <div className="w-100 d-flex align-items-center justify-content-center flex-column gap-1">
                    <CardSubtitle className="fs-2 fw-bolder">
                      ¡Oooooops!
                    </CardSubtitle>
                    <CardText className="text-center fs-4">
                      Parece que aún no cargaste tu primer lote.
                      <br />
                      Pódes añadir un lote dándole al siguiente botón o desde la
                      tabla Mis lotes,
                      <br /> para ayudarte a nutrir tus cultivos de manera ágil
                      y sencilla <br /> logrando la máxima eficiencia en
                      fertilización.
                    </CardText>
                    <Link to="/new-lote" className="btn btn-primary">
                      Añadir lote
                    </Link>
                  </div>
                ) : (
                  <>
                    {" "}
                    {dataSlice.map((dato) => (
                      <div
                        className={
                          !colorScheme
                            ? "cardLoteInfo-white"
                            : "cardLoteInfo-dark"
                        }
                      >
                        <div className="d-flex flex-column gap-1">
                          <div className="w-100 d-flex align-items-center justify-content-center gap-2">
                            <img
                              src={toolBox}
                              alt="iconLote"
                              className="sizeIconLote"
                            />

                            <CardSubtitle className="fs-3 fw-bolder text-primary mtt">
                              {dato.name}
                            </CardSubtitle>
                          </div>

                          <div className="d-flex align-items-center gap-2 mb-1">
                            <div className="d-flex justify-content-start flex-column">
                              <CardText className="fw-bolder fs-4 m-0 p-0">
                                {dato.field}
                              </CardText>
                              <span className="fs-5 m-0 p-0">Campo</span>
                            </div>

                            <div className="d-flex justify-content-start flex-column">
                              <CardText className="fw-bolder fs-4 m-0 p-0">
                                {dato.location}
                              </CardText>
                              <span className="fs-5 m-0 p-0">Localidad</span>
                            </div>

                            <div className="d-flex justify-content-start flex-column">
                              <CardText className="fw-bolder fs-4 m-0 p-0">
                                {!dato.crop ? (
                                  <span className="error_input_message_register">
                                    Sin cultivo
                                  </span>
                                ) : (
                                  `${dato.crop}`
                                )}
                              </CardText>
                              <span className="fs-5 m-0 p-0">Cultivo</span>
                            </div>

                            <div className="d-flex justify-content-start flex-column">
                              <CardText className="fw-bolder fs-4 m-0 p-0">
                                {!dato.date ? (
                                  <span className="error_input_message_register">
                                    Sin fecha
                                  </span>
                                ) : (
                                  `${dato.date}`
                                )}
                              </CardText>
                              <span className="fs-5 m-0 p-0">Fecha</span>
                            </div>
                          </div>
                        </div>

                        {!dato.crop && !dato.date ? (
                          <Link
                            to="/Alta"
                            onClick={() => setAddRecomendacion(dato)}
                            className="btn btn-outline-primary"
                          >
                            Añadir recomendación
                          </Link>
                        ) : (
                          <Link
                            to="/rendimiento"
                            onClick={() => setVerRecomendacion(dato)}
                            className="btn btn-primary"
                          >
                            Ver recomendación
                          </Link>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
};

export default ProfilePage;
