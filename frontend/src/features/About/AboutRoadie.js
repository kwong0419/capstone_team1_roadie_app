import React from "react";
import "../../css/AboutRoadie.css";
import image1 from "../images/pexels-fillipe-gomes-2287298.jpg";
import image2 from "../images/pexels-matheus-bertelli-3697810.jpg";
import image3 from "../images/pexels-wendy-wei-1677710.jpg";
import image4 from "../images/pexels-caleb-oquendo-2927080.jpg";
import image5 from "../images/pexels-harrison-haines-2921541.jpg";

const AboutRoadie = () => {
  const sizeImage = {
    maxWidth: "750px",
    maxHeight: "450px",
  };

  return (
    <div className="aboutRoadieContainer container">
      <div className="aboutJumbotron jumbotron text-center">
        <div className="aboutContainer">
          <h1 className="display-4">What is Roadie?</h1>
        </div>
        <div className="imageCarouselDiv row align-items-center">
          <div className="imageCarouselCol col" /*style={sizeImage}*/>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={sizeImage}
                    src={image1}
                    alt="First slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3 className="item-title">Dual user experience</h3>
                    <p className="item-p">
                      Sign up as an artist as a solo musician or band, or as a
                      client.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={sizeImage}
                    src={image2}
                    alt="Second slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3 className="item-title">Personalize your profile</h3>
                    <p className="item-p">
                      Upload pictures and videos to your portfolio of your shows
                      and events.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={sizeImage}
                    src={image3}
                    alt="Third slide"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3 className="item-title">
                      Direct request to contact artists or clients
                    </h3>
                    <p className="item-p">
                      Instant notification to any client or artist you'd like to
                      connect with.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <p className="lead">
          Roadie is an all in one booking platform for Artists and Clients,
          designed to remove the hassle of event booking that often plagues the
          music industry.
        </p>
      </div>
    </div>
  );
};

export default AboutRoadie;
