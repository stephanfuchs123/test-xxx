import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import Slide from "../../../components/Slide";

const Sliders = () => {
  const [detectivSliderData, setDtectivSliderData] = useState([]);
  const [scarySliderData, setScarySliderData] = useState([]);
  const [documentarySliderData, setDocumentarySliderData] = useState([]);
  const [criminalSliderData, setCriminalSliderData] = useState([]);
  const [animationSliderData, setAnimationSliderData] = useState([]);
  const [historycSliderData, setHistorycSliderData] = useState([]);
  const [actionSliderData, setActionSliderData] = useState([]);
  const [comedySliderData, setComedySliderData] = useState([]);
  const [dramaSliderData, setDramaSliderData] = useState([]);

  // Fetch data for the sliders
  useEffect(() => {
    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%93%E1%83%94%E1%83%A2%E1%83%94%E1%83%A5%E1%83%A2%E1%83%98%E1%83%95%E1%83%98" // detective
    )
      .then((response) => response.json())
      .then((data) => setDtectivSliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );

    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%A1%E1%83%90%E1%83%A8%E1%83%98%E1%83%9C%E1%83%94%E1%83%9A%E1%83%94%E1%83%91%E1%83%90%E1%83%97%E1%83%90" // scary
    )
      .then((response) => response.json())
      .then((data) => setScarySliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );

    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%93%E1%83%9D%E1%83%99%E1%83%A3%E1%83%9B%E1%83%94%E1%83%9C%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98" // documentary
    )
      .then((response) => response.json())
      .then((data) => setDocumentarySliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );
    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%99%E1%83%A0%E1%83%98%E1%83%9B%E1%83%98%E1%83%9C%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98" // criminal
    )
      .then((response) => response.json())
      .then((data) => setCriminalSliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );
    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%90%E1%83%9C%E1%83%98%E1%83%9B%E1%83%90%E1%83%AA%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98" // animation
    )
      .then((response) => response.json())
      .then((data) => setAnimationSliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );
    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%98%E1%83%A1%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%98%E1%83%A3%E1%83%9A%E1%83%98" // historyc
    )
      .then((response) => response.json())
      .then((data) => setHistorycSliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );
    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%9B%E1%83%AB%E1%83%90%E1%83%A4%E1%83%A0%E1%83%A1%E1%83%98%E1%83%A3%E1%83%9F%E1%83%94%E1%83%A2%E1%83%98%E1%83%90%E1%83%9C%E1%83%98" // action
    )
      .then((response) => response.json())
      .then((data) => setActionSliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );
    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%99%E1%83%9D%E1%83%9B%E1%83%94%E1%83%93%E1%83%98%E1%83%90" // comedy
    )
      .then((response) => response.json())
      .then((data) => setComedySliderData(data))
      .catch((error) =>
        console.error("Error fetching data for first slider:", error)
      );

    fetch(
      "https://dashboard.ucqire.com/api/filter-movies?janri=%E1%83%93%E1%83%A0%E1%83%90%E1%83%9B%E1%83%90" // drama
    )
      .then((response) => response.json())
      .then((data) => setDramaSliderData(data))
      .catch((error) =>
        console.error("Error fetching data for second slider:", error)
      );
  }, []);

  return (
    <>
      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">კომედია</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev1" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next1" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={comedySliderData}  next={1} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">ანიმაცია</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev2" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next2" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={animationSliderData} next={2} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">საშინელებათა</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev3" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next3" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={scarySliderData} next={3} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">დოკუმენტური</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev4" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next4" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={documentarySliderData} next={4} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">კრიმინალური</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev5" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next5" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={criminalSliderData} next={5} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">ისტორიული</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev6" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next6" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={historycSliderData} next={6} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">დრამა</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev7" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next7" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={dramaSliderData} next={7} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">დეტექტივი</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev8" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next8" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={detectivSliderData} next={8} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="iq-favorites">
        <Container fluid>
          <Row>
            <Col sm="12" className="overflow-hidden">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="main-title">მძაფრ სიუჟეტიანი</h4>
              </div>
              <div id="favorites-contens">
                <div id="prev9" className="swiper-button swiper-button-prev">
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="next9" className="swiper-button swiper-button-next">
                  <i className="fa fa-chevron-right"></i>
                </div>

                <div>
                  <Slide type={"movie"} data={actionSliderData} next={9} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sliders;
