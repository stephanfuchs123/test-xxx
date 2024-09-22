import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Slide from "../../../components/Slide";
import "swiper/swiper-bundle.css";

const Sliders = ({ selectedGenre }) => {
  const [sliderData, setSliderData] = useState({
    detectivSliderData: [],
    scarySliderData: [],
    documentarySliderData: [],
    criminalSliderData: [],
    animationSliderData: [],
    historycSliderData: [],
    actionSliderData: [],
    comedySliderData: [],
    dramaSliderData: [],
  });

  const [error, setError] = useState("");

  // Function to fetch data for both predefined genre and selected genre
  const fetchData = (predefinedGenre, key) => {
    // If there's a selected genre, combine it with the predefined genre
    const genreParam = selectedGenre ? `${selectedGenre},${predefinedGenre}` : predefinedGenre;

    fetch(`https://dashboard.ucqire.com/api/filter-movies?janri=${genreParam}`)
      .then((response) => response.json())
      .then((data) => {
        setSliderData((prevState) => ({
          ...prevState,
          [key]: data,
        }));
      })
      .catch((error) => {
        console.error(`Error fetching data for ${key}:`, error);
        setError(`Failed to load ${key}`);
      });
  };

  useEffect(() => {
    // Fetch data for each slider, combining selectedGenre with the predefined genre
    fetchData("დეტექტივი", "detectivSliderData");
    fetchData("საშინელებათა", "scarySliderData");
    fetchData("დოკუმენტური", "documentarySliderData");
    fetchData("კრიმინალური", "criminalSliderData");
    fetchData("ანიმაციური", "animationSliderData");
    fetchData("ისტორიული", "historycSliderData");
    fetchData("მძაფრ სიუჟეტიანი", "actionSliderData");
    fetchData("კომედია", "comedySliderData");
    fetchData("დრამა", "dramaSliderData");
  }, [selectedGenre]);  // Refetch when selectedGenre changes

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                  <Slide type={"movie"} data={sliderData.comedySliderData} next={1} />
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
                  <Slide type={"movie"} data={sliderData.animationSliderData} next={2} />
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
                  <Slide type={"movie"} data={sliderData.scarySliderData} next={3} />
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
                  <Slide type={"movie"} data={sliderData.documentarySliderData} next={4} />
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
                  <Slide type={"movie"} data={sliderData.criminalSliderData} next={5} />
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
                  <Slide type={"movie"} data={sliderData.historycSliderData} next={6} />
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
                  <Slide type={"movie"} data={sliderData.dramaSliderData} next={7} />
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
                  <Slide type={"movie"} data={sliderData.detectivSliderData} next={8} />
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
                  <Slide type={"movie"} data={sliderData.actionSliderData} next={9} />
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
